import Link from "next/link"
import { Gem } from "lucide-react"
import { Metadata } from "next"
import { CredentialsSignUpForm } from "./credentials-signup-form"

export const metadata: Metadata = {
  title: "Sign Up",
}

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-neutral-50 via-white to-emerald-50/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 group">
            <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
              <Gem className="w-8 h-8 text-white" />
            </div>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-neutral-900">
            Create your account
          </h2>
          <p className="mt-2 text-neutral-600">
            Experience luxury craftsmanship at your fingertips
          </p>
        </div>

        <CredentialsSignUpForm />

        <p className="mt-8 text-center text-sm text-neutral-500">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="text-emerald-600 hover:text-emerald-700 transition-colors">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 transition-colors">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}
