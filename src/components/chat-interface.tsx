'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (input.trim() && !isLoading) {
      setIsLoading(true)
      setMessages((prevMessages) => [...prevMessages, { role: 'user', content: input }])
      
      try {
        // Here you would call the Gemini API to get a response
        // For now, we'll just simulate a response
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'assistant', content: 'This is a simulated response from the AI assistant.' },
        ])
      } catch (error) {
        console.error('Error generating response:', error)
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' },
        ])
      } finally {
        setIsLoading(false)
        setInput('')
      }
    }
  }

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle>Chat with Legal Assistant</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full pr-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 p-3 rounded-lg ${
                message.role === 'user' ? 'bg-primary text-primary-foreground ml-auto' : 'bg-muted'
              } max-w-[80%]`}
            >
              {message.content}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow"
          />
          <Button className='bg-amber-100 hover:bg-amber-200 border-amber-200 text-black text-base'
          type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
