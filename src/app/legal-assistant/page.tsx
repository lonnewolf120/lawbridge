import { LegalCategoryForm } from '@/components/legal-category-form'
import  Chatbot  from '@/components/chat-interface'

export default function LegalAssistantPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-serif mb-8">Legal Assistant</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <LegalCategoryForm />
        <Chatbot />
      </div>
    </div>
  )
}

