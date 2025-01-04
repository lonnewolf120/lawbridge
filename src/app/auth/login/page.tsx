'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Snackbar } from '@mui/material'
// import { useAuth } from '@/contexts/auth-context'

export default function LoginPage() {
  const [userType, setUserType] = useState<'client' | 'lawyer'>('client')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const { login } = useAuth()
  const [snackopen, setSnack] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setSnack(true);
      // await login(email, password)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>
        <Snackbar
          open={snackopen}
          autoHideDuration={6000}
          message="Logged in"
        />
        <div className="flex gap-4 p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setUserType('client')}
            className={`flex-1 py-2 rounded-md ${
              userType === 'client'
                ? 'bg-amber-500 text-amber-50'
                : 'text-slate-700'
            }`}
          >
            Client
          </button>
          <button
            onClick={() => setUserType('lawyer')}
            className={`flex-1 py-2 rounded-md ${
              userType === 'lawyer'
                ? 'bg-amber-500 text-amber-50'
                : 'text-slate-700'
            }`}
          >
            Lawyer
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}

              className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 border-slate-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
                Remember me
              </label>
            </div>

            <Link
              href="/auth/reset-password"
              className="text-sm text-amber-500 hover:text-amber-9  00"
            >
              Forgot password?
            </Link>
          </div>
          {userType==='client'?(<Link href='/auth/cases/dashboard'>
          <Button
            type="submit"
            className="w-full py-3 mt-4 mb-2 bg-amber-200 rounded-md hover:bg-amber-500 text-black text-base"
          >
            Sign in
          </Button>
          </Link>):
          (<Link href='/lawyer/dashboard'>
          <Button
            type="submit"
            className="w-full py-3 mt-4 mb-2 bg-amber-200 rounded-md hover:bg-amber-500 text-black text-base"
          >
            Sign in
          </Button>
          </Link>)}
          </form>
          <p className="text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-amber-600 hover:text-amber-900">
              Sign up
            </Link>
          </p>
      </div>
    </div>
  )
}
