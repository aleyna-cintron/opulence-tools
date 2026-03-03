import NextAuth from "next-auth"
    import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/db/client"
import Credentials from "next-auth/providers/credentials"
import { credentialsSchema } from "./lib/validators"
import { compare } from "bcrypt-ts-edge"
import type { NextAuthConfig } from "next-auth"

export const config = {
    pages: {
        signIn: '/sign-in',
        error: '/sign-in',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    adapter: PrismaAdapter(prisma as any),
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "johndoe@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "*****" }
            },
            authorize: async (credentials) => {
                const result = credentialsSchema.safeParse(credentials)
                if (!result.success) return null;

                const { email, password } = result.data;

                const user = await prisma.user.findUnique({
                    where: {
                        email: email as string
                    }
                })
                if (!user) return null;

                const isValid = await compare(password, user.password as string)
                if (!isValid) return null;
                
                return {
                    id: user.id,
                    email: user.email,
                    name: user.name ?? null,
                    role: user.role
                }
            }
        })
    ],
    callbacks: {
        async session({ session, user, trigger, token }: any) {

            // set variables in token
            session.user.id = token.sub;
            session.user.role = token.role;
            session.user.name = token.name

            if (trigger === 'update') {
                session.user.name = user.name;
            }
            
            return session;
        },
        async jwt({ token, user, trigger, session }: any) {
            if (user) {
                token.role = user.role;

                // Create a default name if no name is assigned
                if (user.name === 'NO_NAME') {
                    token.name = user.email!.split('@')[0];

                    // Update user name in DB
                    await prisma.user.update({
                        where: { id: user.id },
                        data: {name: token.name}
                    })
                }
                return token;
            }
        }
    }
} satisfies NextAuthConfig;

export const { auth, handlers, signIn, signOut } = NextAuth(config)