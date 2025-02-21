'use client'

import { useState } from 'react'
import { LegalCategoryForm } from '@/components/legal-category-form'
import Chatbot from '@/components/chat-interface'
import { parseCookies } from 'nookies'
import Button from '@mui/material/Button'
import Link from 'next/link'

export default function LegalAssistantPage() {
  const [category, setCategory] = useState<string | null>(null)
  const [description, setDescription] = useState<string | null>(null)
  const cookies = parseCookies()

  return (
    <div className="w-full mx-auto py-12 px-8">
      <h1 className="text-3xl font-serif mb-8">Avijatrik: Your Personal Legal Assistant</h1>
      {
        cookies.token !== null ?
        <div className="grid md:grid-cols-[1fr,3fr]  gap-8">
        <LegalCategoryForm
          category={category}
          setCategory={setCategory}
          description={description}
          setDescription={setDescription}
        />
        <Chatbot category={category} />
      </div>
      :
      <div>
        <p className='text-4xl'> Thank you for your interest</p>
        <p className='text-3xl'> but we require you to login first, before accessing the Legal AI Assistant</p>
        <Button>
          <Link href='/auth/login'>
          Login
          </Link>
        </Button>
      </div>  
    
    }
    </div>
  )
}
