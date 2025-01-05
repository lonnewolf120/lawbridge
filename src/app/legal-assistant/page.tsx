'use client'

import { useState } from 'react'
import { LegalCategoryForm } from '@/components/legal-category-form'
import Chatbot from '@/components/chat-interface'

export default function LegalAssistantPage() {
  const [category, setCategory] = useState<string | null>(null)
  const [description, setDescription] = useState<string | null>(null)

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-serif mb-8">Legal Assistant</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <LegalCategoryForm
          category={category}
          setCategory={setCategory}
          description={description}
          setDescription={setDescription}
        />
        <Chatbot category={category} />
      </div>
    </div>
  )
}
