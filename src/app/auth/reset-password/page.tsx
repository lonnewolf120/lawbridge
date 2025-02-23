'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ResetPasswordPage() {
  const [emailSent, setEmailSent] = useState(false)

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8 bg-primary-50 p-8 rounded-lg shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-accent-900">Reset Password</h2>
          <p className="mt-2 text-border-600">
            {emailSent
              ? "Check your email for reset instructions"
              : "Enter your email to reset your password"}
          </p>
        </div>

        {!emailSent ? (
          <form className="mt-8 space-y-6" onSubmit={() => setEmailSent(true)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-accent-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#8B4513] text-white rounded-md hover:bg-[#D2691E]"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <div className="mt-8 space-y-6">
            <p className="text-center text-sm text-accent-600">
              Didn't receive the email?{' '}
              <button
                onClick={() => setEmailSent(false)}
                className="text-[#8B4513] hover:text-[#D2691E]"
              >
                Try again
              </button>
            </p>
          </div>
        )}

        <p className="text-center text-sm text-accent-600">
          Remember your password?{' '}
          <Link href="/auth/login" className="text-[#8B4513] hover:text-[#D2691E]">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

