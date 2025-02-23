"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import ReactMarkdown from "react-markdown"
import Link from "next/link"
import { Send, Bot, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import PromptSearch from "./external/PromptSearch"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function Chatbot({ category, description }: { category: string | null; description: string | null }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    const storedMessages = sessionStorage.getItem("chat_messages")
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages))
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem("chat_messages", JSON.stringify(messages))
  }, [messages])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (input.trim() && !isLoading) {
      setIsLoading(true)
      setMessages((prev) => [...prev, { role: "user", content: input }])
      setInput("")

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input, category, description }),
        })

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

        const data = await response.json()
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }])
      } catch (error) {
        console.error("Error:", error)
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
        ])
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <Card className="h-[600px] flex flex-col backdrop-blur-sm bg-white/50 border-gray-200">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary-600" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
              Avijatrik AI Assistant
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow overflow-hidden relative">
          <AnimatePresence>
            {(category || description) && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col gap-2 mb-4"
              >
                {category && (
                  <div className="flex items-center gap-2 p-2 bg-primary-50 text-primary-700 rounded-md text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>Focusing on {category !== "other" ? category : "general"} law</span>
                  </div>
                )}
                {description && (
                  <div className="flex items-center gap-2 p-2 bg-primary-50 text-primary-700 rounded-md text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>Context received for personalized assistance</span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="h-full pr-4 overflow-y-auto space-y-4" ref={scrollRef}>
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === "user" ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <ReactMarkdown className="prose prose-sm max-w-none">{message.content}</ReactMarkdown>
                    {message.content.includes("Find Lawyer") && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/find-lawyers">
                          <Button className="mt-4 bg-white text-primary-600 hover:bg-gray-100">Find a Lawyer</Button>
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </CardContent>
        <CardFooter className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex w-full gap-2">
            <div className="flex-grow">
              <PromptSearch placeholder="Type your message..." onChange={setInput} className="w-full" />
            </div>
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button type="submit" disabled={isLoading} className="bg-primary-600 hover:bg-primary-700 text-white">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </motion.div> */}
          </form>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

