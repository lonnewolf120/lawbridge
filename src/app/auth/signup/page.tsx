'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SignUpPage() {
  const [userType, setUserType] = useState<'client' | 'lawyer'>('client')

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Create Account</h2>
          <p className="mt-2 text-gray-600">Join LawBridge today</p>
        </div>

        <div className="flex gap-4 p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setUserType('client')}
            className={`flex-1 py-2 rounded-md ${
              userType === 'client'
                ? 'bg-[#D2691E] text-white'
                : 'text-slate-700'
            }`}
          >
            Client
          </button>
          <button
            onClick={() => setUserType('lawyer')}
            className={`flex-1 py-2 rounded-md ${
              userType === 'lawyer'
                ? 'bg-[#D2691E] text-white'
                : 'text-slate-700'
            }`}
          >
            Lawyer
          </button>
        </div>

        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
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

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md"
            />
          </div>

          {userType === 'lawyer' && (
            <div>
              <label htmlFor="barNumber" className="block text-sm font-medium text-slate-700">
                Bar Number
              </label>
              <input
                id="barNumber"
                name="barNumber"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md"
              />
            </div>
          )}
          {userType === 'lawyer' && (
            <div>
              <label htmlFor="NID" className="block text-sm font-medium text-slate-700">
                NID number
              </label>
              <input
                id="NID"
                name="NID"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#8B4513] text-white rounded-md hover:bg-[#D2691E]"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[#8B4513] hover:text-[#D2691E]">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

