import Link from "next/link"
import { signIn } from "@/auth"
import { hashSync } from "bcrypt-ts-edge"
import { prisma } from "@/db/client"
import { redirect } from "next/navigation"

export function CredentialsSignUpForm() {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-8 shadow-sm">
      <form
        action={async (formData) => {
          "use server"
          const name = formData.get("name") as string
          const email = formData.get("email") as string
          const password = formData.get("password") as string
          const confirmPassword = formData.get("confirmPassword") as string

          if (password !== confirmPassword) {
            redirect("/sign-up?error=Passwords do not match")
          }

          const existingUser = await prisma.user.findUnique({
            where: { email },
          })

          if (existingUser) {
            redirect("/sign-up?error=Email already in use")
          }

          await prisma.user.create({
            data: {
              name,
              email,
              password: hashSync(password, 10),
            },
          })

          await signIn("credentials", {
            email,
            password,
            redirectTo: "/",
          })
        }}
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-2">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-linear-to-br from-emerald-500 to-emerald-600 text-white py-3 rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all font-semibold"
        >
          Create Account
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-1 border-t border-neutral-200" />
        <span className="px-4 text-sm text-neutral-500">or</span>
        <div className="flex-1 border-t border-neutral-200" />
      </div>

      {/* Google sign-up */}
      <form
        action={async () => {
          "use server"
          await signIn("google", { redirectTo: "/" })
        }}
      >
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 border border-neutral-300 rounded-lg py-2.5 hover:bg-neutral-50 transition-colors font-medium text-neutral-700"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Sign up with Google
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-neutral-600">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
