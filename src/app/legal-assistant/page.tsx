'use client'

import { useState } from 'react'
import { LegalCategoryForm } from '@/components/legal-category-form'
import Chatbot from '@/components/chat-interface'

export default function LegalAssistantPage() {
  const [category, setCategory] = useState<string | null>(null)
  const [description, setDescription] = useState<string | null>(null)

  return (
    <div className="w-full mx-auto py-12 px-8">
      <h1 className="text-3xl font-serif mb-8">Avijatrik: Your Personal Legal Assistant</h1>
      <div className="grid md:grid-cols-[1fr,3fr]  gap-8">
        <LegalCategoryForm
          category={category}
          setCategory={setCategory}
          description={description}
          setDescription={setDescription}
        />
        <Chatbot category={category} description={description} />
      </div>
    </div>
  )
}
