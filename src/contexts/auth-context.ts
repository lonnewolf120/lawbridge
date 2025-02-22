// 'use client'

// import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
// import { useRouter } from 'next/navigation'
// import nookies from 'nookies'

// type User = {
//   id: string
//   name: string
//   email: string
//   role: 'client' | 'lawyer'
// }

// type AuthContextType = {
//   user: User | null
//   login: (email: string, password: string, role: 'client' | 'lawyer') => Promise<void>
//   logout: () => void
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null)
//   const router = useRouter()

//   useEffect(() => {
//     const cookies = nookies.get(null)
//     const storedUser = cookies.user
//     if (storedUser) {
//       setUser(JSON.parse(storedUser))
//     }
//   }, [])

//   const login = async (email: string, password: string, role: 'client' | 'lawyer'): Promise<void> => {
//     // In a real application, you would validate the credentials with your backend
//     // For this example, we'll just simulate a successful login
//     const fakeUser: User = {
//       id: '1',
//       name: 'John Doe',
//       email: email,
//       role: role,
//     }
//     setUser(fakeUser)
//     nookies.set(null, 'user', JSON.stringify(fakeUser), { maxAge: 7 * 24 * 60 * 60, path: '/' }) // Expires in 7 days
//     router.push('/dashboard')
//   }

//   const logout = () => {
//     setUser(null)
//     nookies.destroy(null, 'user')
//     router.push('/login')
//   }

//   // return (
//   //   <AuthContext.Provider value={{ user, login, logout }}>
//   //     {children}
//   //   </AuthContext.Provider>
//   // )
// }

// export function useAuth() {
//   const context = useContext(AuthContext)
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider')
//   }
//   return context
// }