'use client'

import { useState } from 'react'
import { LegalCategoryForm } from '@/components/legal-category-form'
import Chatbot from '@/components/chat-interface'
import { parseCookies } from 'nookies'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FileCodeIcon as LawScale } from 'lucide-react'

export default function LegalAssistantPage() {
  const [category, setCategory] = useState<string | null>(null)
  const [description, setDescription] = useState<string | null>(null)
  const cookies = parseCookies()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mx-auto py-12 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <LawScale className="h-8 w-8 text-primary-600" />
            <h1 className="text-4xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
              Avijatrik: Your Personal Legal Assistant
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get expert legal guidance powered by AI. Simple, accurate, and always available.
          </p>
        </motion.div>

        {cookies.token ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-[1fr,3fr] gap-8"
          >
            <LegalCategoryForm
              category={category}
              setCategory={setCategory}
              description={description}
              setDescription={setDescription}
            />
            <Chatbot category={category} description={description} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg border border-gray-200"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
              Welcome to Avijatrik
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Please log in to access our AI-powered legal assistant
            </p>
            <Link href="/auth/login">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white font-medium text-lg px-8 py-6">
                Login to Continue
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
