'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { Prompt } from 'next/font/google'
import PromptSearch from './external/PromptSearch'
import SearchInput from './external/PromptSearch'

type Message = {
    role: 'user' | 'assistant'
    content: string
}

export default function Chatbot({ category, description }: { category: string | null, description: string | null }) {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
  }, [messages]);

    useEffect(() => {
        // Load chat history from session storage on mount
       const storedMessages = sessionStorage.getItem('chat_messages');
       if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
       }
   }, []);

    useEffect(() => {
        // Store chat history to session storage whenever it changes
      sessionStorage.setItem('chat_messages', JSON.stringify(messages));
   }, [messages]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (input.trim() && !isLoading) {
            setIsLoading(true);
            setMessages((prevMessages) => [...prevMessages, { role: 'user', content: input }]);

            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: input, category, description }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { role: 'assistant', content: data.reply },
                ]);

            } catch (error: any) {
                console.error('Error generating response:', error);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' },
                ]);
            } finally {
                setIsLoading(false);
                setInput('');
            }
        }
    }


    return (
        <Card className="h-[600px] flex flex-col">
            <CardHeader>
                <CardTitle>
                <p className='text-3xl'>Chat with Avijatrik (AI Legal Assistant)</p>
                {/* <p>Avijatrik can find you a lawyer based on your legal issue, or help you to solve it yourself. Try it out!</p> */}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden relative mb-4">
                {category && (
                    <div className="m-2 p-2 bg-blue-100 text-blue-800 rounded-md text-sm">
                        Assistant will now speak in context to {category !== 'other' ? category : 'all'} Laws
                    </div>
                )}
                {description && (
                    <div className="m-2 p-2 bg-blue-100 text-blue-800 rounded-md text-sm">
                        Assistant received your description, will provide legal help in that context
                    </div>
                )}
                <div className="h-full pr-4 pt-3 overflow-y-auto pb-3 mb-4" ref={scrollRef}>

                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`m-2 p-3 rounded-lg ${
                                message.role === 'user' ? 'bg-primary text-primary-foreground ml-auto' : 'bg-muted'
                            } max-w-[80%]`}
                        >
                            <ReactMarkdown>{message.content}</ReactMarkdown>
                            {message.content.includes("Find Lawyer") && (
                                <Link href="/find-lawyers">
                                <Button className="mt-4 mb-4  bg-blue-500 hover:bg-blue-600 text-white">
                                    Find Lawyer Page
                                </Button>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
            <hr className="border-t" />
            <CardFooter>
                <form onSubmit={handleSubmit} className="flex w-full gap-2">

                    {/* <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-grow"
                    /> */}
                    <PromptSearch placeholder='Send a message' onChange={setInput} className='w-full'/>
                    {/* <Button
                        className="bg-primary-100 hover:bg-primary-200 border-primary-200 text-black text-base"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send'}
                    </Button> */}
                </form>
            </CardFooter>
        </Card>
    )
}