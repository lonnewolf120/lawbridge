'use client'

import { useState } from 'react'

export default function VerifyPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

    if (element.nextSibling && element.value !== '') {
      (element.nextSibling as HTMLInputElement).focus()
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8 bg-primary-50 p-8 rounded-lg shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-accent-900">Verify Your Account</h2>
          <p className="mt-2 text-border-600">
            We sent a verification code to your email
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="flex justify-center gap-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                className="w-12 h-12 text-center text-xl border border-slate-300 rounded-md"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#8B4513] text-white rounded-md hover:bg-[#D2691E]"
          >
            Verify Account
          </button>

          <p className="text-center text-sm text-accent-600">
            Didn't receive the code?{' '}
            <button
              type="button"
              className="text-[#8B4513] hover:text-[#D2691E]"
            >
              Resend
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

