'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Snackbar } from '@mui/material'
import { auth_login } from '@/lib/functions'
import { setCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/navigation'
import { Eye, EyeIcon, EyeOffIcon } from 'lucide-react'

export default function LoginPage() {
  const [userType, setUserType] = useState<'client' | 'lawyer'>('client')
  const [email, setEmail] = useState('')
  const [snackMessage, setSnackMessage] = useState('')
  const [snackColor, setSnackColor] = useState('success')
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [snackopen, setSnack] = useState(false)
  const router = useRouter()
  const cookies = parseCookies()

  if(cookies.lawyer){
    router.push('/lawyer/dashboard')
  }else if(cookies.user){
    router.push('/auth/cases/dashboard')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setSnack(true);
      const res = await auth_login({ email, password, user_type: userType })
      console.log("Login res:", res)
      if (res.status === 200) {
        const data = await res.json()
        setCookie(null, 'token', data.token, { path: '/' })
        setCookie(null, 'user', JSON.stringify(data.user), { path: '/' })
        if (data.lawyer) {
          setCookie(null, 'lawyer', JSON.stringify(data.lawyer), { path: '/' })
        }
        setSnackMessage('Login successful')
        setSnackColor('success')
        setSnack(true)
          
      if(data.lawyer){
        router.push('/lawyer/dashboard')
      }
      else{
      router
      .push('/auth/cases/dashboard')
      }
      }else{
        
      setSnackColor('error')
      setSnackMessage('Login failed')
      setSnack(true)
      }
    } catch (error) {
      console.error('Login failed:', error)
      setSnackColor('error')
      setSnackMessage('Login failed')
      setSnack(true)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8 bg-primary-50 p-8 rounded-lg shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-accent-900">Welcome Back</h2>
          <p className="mt-2 text-border-600">Sign in to your account</p>
        </div>
        <Snackbar
          open={snackopen}
          autoHideDuration={5000}
          color={snackColor}
          onClose={() => setSnack(false)}
          message={snackMessage}
        />
        <div className="flex gap-4 p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setUserType('client')}
            className={`flex-1 py-2 rounded-md ${
              userType === 'client'
                ? 'bg-primary-500 text-primary-50'
                : 'text-accent-700'
            }`}
          >
            Client
          </button>
          <button
            onClick={() => setUserType('lawyer')}
            className={`flex-1 py-2 rounded-md ${
              userType === 'lawyer'
                ? 'bg-primary-500 text-primary-50'
                : 'text-accent-700'
            }`}
          >
            Lawyer
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-accent-700">
                Password
              </label>
              <div className="relative">
                <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md"
                />
                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                {showPassword ? <EyeOffIcon/>: <EyeIcon/>}
                </button>
              </div>
            </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 border-slate-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-accent-700">
                Remember me
              </label>
            </div>

            <Link
              href="/auth/reset-password"
              className="text-sm text-primary-500 hover:text-primary-9  00"
            >
              Forgot password?
            </Link>
          </div>
          <Button
            type="submit"
            className="w-full py-3 mt-4 mb-2 bg-primary-200 rounded-md hover:bg-primary-500 text-black text-base"
          >
            Sign in
          </Button>
        </form>
          <p className="text-center text-sm text-accent-600">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-primary-600 hover:text-primary-900">
              Sign up
            </Link>
          </p>
      </div>
    </div>
  )
}