'use server'

import { credentialsSchema, signUpFormSchema } from "../validators";
import { signIn, signOut } from '@/auth';
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { hash } from "bcrypt-ts-edge";
import { prisma } from '@/db/client'

// Sign in the user with credentials
export async function signInWithCredentials(prevState: unknown, formData: FormData) {
    try {
        const user = credentialsSchema.parse({
            email: formData.get('email'),
            password: formData.get('password')
        });

        await signIn('credentials', user);

        return { success: true, message: 'Signed in successfully' }

    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        return { success: false, message: 'Invalid email or password' }
    }
}

export async function signOutUser() {
    try {
        await signOut();
    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
    }
}

// Sign up user
export async function signUpUser(prevState: unknown, formData: FormData) {
    try {
        const user = signUpFormSchema.parse({
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        })
        const hashPw = await hash(user.password, 10);
        await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: hashPw
            }
        })
        await signIn('credentials', {
            email: user.email,
            password: user.password
        });

    } catch (error) {
        if (isRedirectError(error)) {
            throw error;
        }
        return { success: false, message: 'User was not registered' }

    }
}