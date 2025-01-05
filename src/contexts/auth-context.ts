// 'use client'

// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import Cookies from 'js-cookie'

// type User = {
//   id: string
//   name: string
//   email: string
//   role: 'client' | 'lawyer'
// }

// type AuthContextType = {
//   user: User | null
//   login: (email: string, password: string) => Promise<void>
//   logout: () => void
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null)
//   const router = useRouter()

//   useEffect(() => {
//     const storedUser = Cookies.get('user')
//     if (storedUser) {
//       setUser(JSON.parse(storedUser))
//     }
//   }, [])

//   const login = async (email: string, password: string, role: 'client' | 'lawyer') => {
//     // In a real application, you would validate the credentials with your backend
//     // For this example, we'll just simulate a successful login
//     const fakeUser: User = {
//       id: '1',
//       name: 'John Doe',
//       email: email,
//       role: role,
//     }
//     setUser(fakeUser)
//     Cookies.set('user', JSON.stringify(fakeUser), { expires: 7 }) // Expires in 7 days
//     router.push('/dashboard')
//   }

//   const logout = () => {
//     setUser(null)
//     Cookies.remove('user')
//     router.push('/login')
//   }

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export function useAuth() {
//   const context = useContext(AuthContext)
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider')
//   }
//   return context
// }
