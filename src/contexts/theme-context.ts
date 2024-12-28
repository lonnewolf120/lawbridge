// 'use client'

// import React, { createContext, useContext, useEffect, useState } from 'react'

// type Theme = 'light' | 'dark'

// type ThemeContextType = {
//   theme: Theme
//   toggleTheme: () => void
// }

// // Create the ThemeContext
// const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme, setTheme] = useState<Theme>('light')

//   // Load theme from localStorage or system preference on mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme')
//     if (savedTheme === 'light' || savedTheme === 'dark') {
//       setTheme(savedTheme)
//     } else if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       setTheme('dark')
//     }
//   }, [])

//   // Update the DOM and localStorage when the theme changes
//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//     localStorage.setItem('theme', theme)
//   }, [theme])

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// // Custom hook for accessing theme context
// export function useTheme() {
//   const context = useContext(ThemeContext)
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider')
//   }
//   return context
// }
