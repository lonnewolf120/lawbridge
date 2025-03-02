'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button, Snackbar } from '@mui/material'
import { auth_signup } from '@/lib/functions'
import { setCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export default function SignUpPage() {
  const [userType, setUserType] = useState<'client' | 'lawyer'>('client')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nid, setNid] = useState('')
  const [message, setMessage] = useState('')
  const [barNumber, setBarNumber] = useState('')
  const router = useRouter()
  const [snackopen, setSnack] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      try {
      const userData = {
        "user_type":userType,
        "first_name":firstName,
        "last_name":lastName,
        email,
        password,
        ...(userType === 'lawyer' && { "nid":nid, "bar_number":barNumber }),
      };
      console.log("Userdata;", userData)
      const res = await auth_signup(userData)
      
      if (res.status === 201) {
        const data = await res.json();
        setCookie(null, 'token', data.token, { path: '/' });
        setCookie(null, 'user', JSON.stringify(data.user), { path: '/' });
        if (data.lawyer) {
          setCookie(null, 'lawyer', JSON.stringify(data.lawyer), { path: '/' });
        }
        setMessage('Signup successful');
        setSnack(true);

        // const cookies = parseCookies();
        // console.log('Cookies:', cookies);
        console.log("Signup successful, cookies set");
        if(data.lawyer){
          router.push('/lawyer/dashboard')
        }
        else{
        router
        .push('/auth/cases/dashboard')
        }
      }
      else {
        const data = await res.json();
        console.log("Signup failed:", data)
        setMessage(data.message);
        setSnack(true);
      }
      
    } catch (error) {
      console.error('Signup failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8 bg-primary-50 p-8 rounded-lg shadow-xl">
        <Snackbar open={snackopen} autoHideDuration={3000} 
          onClose={() => setSnack(false)}

        message={message} />
        <div className="text-center">
          <h2 className="text-3xl font-bold text-accent-900">Create Account</h2>
          <p className="mt-2 text-border-600">Join Shalish today</p>
        </div>

        <div className="flex gap-4 p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setUserType('client')}
            className={`flex-1 py-2 rounded-md ${
              userType === 'client'
                ? 'bg-primary text-white'
                : 'text-accent-700'
            }`}
          >
            Client
          </button>
          <button
            onClick={() => setUserType('lawyer')}
            className={`flex-1 py-2 rounded-md ${
              userType === 'lawyer'
                ? 'bg-primary text-white'
                : 'text-accent-700'
            }`}
          >
            Lawyer
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-accent-700">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-accent-700">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          {userType === 'lawyer' && (
            <div>
              <label htmlFor="NID" className="block text-sm font-medium text-accent-700">
                NID number
              </label>
              <input
                id="NID"
                name="NID"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md"
                value={nid}
                onChange={(e) => setNid(e.target.value)}
              />
            </div>
          )}
          {userType === 'lawyer' && (
            <div>
              <label htmlFor="barNumber" className="block text-sm font-medium text-accent-700">
                Bar Number
              </label>
              <input
                id="barNumber"
                name="barNumber"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md"
                value={barNumber}
                onChange={(e) => setBarNumber(e.target.value)}
              />
            </div>
          )}

{/* 
          {userType === 'client' ? (

            <button
            type="submit"
            className="w-full py-3 bg-[#8B4513] text-white rounded-md hover:bg-[#D2691E] mt-10"
          >
            Create Account
            </button>) : (

            <button
            type="submit"
            className="w-full py-3 bg-[#8B4513] text-white rounded-md hover:bg-[#D2691E] mt-10"
          >
            Create Account
            </button>
          )} */}
        <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-3 bg-primary text-white rounded-md hover:bg-secondary hover:text-primary text-bold  mt-10"
          >
            Create Account
            </button>
    
          <p className="text-center text-sm text-accent-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-secondary hover:text-primary">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
