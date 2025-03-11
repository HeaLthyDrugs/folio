'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'
import ChatMessage from './ChatMessage'
import { cn } from '@/app/lib/utils'
import { generateResponse } from '@/app/lib/chat-service'

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await generateResponse(input.trim())
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error getting response:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble processing your question. Please try again.",
        role: 'assistant',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-full flex-col rounded-3xl bg-white shadow-xl">
      {/* Chat Header */}
      <div className="border-b border-gray-100 p-6">
        <h2 className="text-xl font-medium text-gray-900">
          Chat with AI Assistant
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Ask me anything about Manish
        </p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <AnimatePresence initial={false}>
          {messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex h-full items-center justify-center text-center"
            >
              <div className="max-w-sm space-y-3 rounded-2xl bg-gray-50 p-8">
                <p className="text-2xl">
                  👋
                </p>
                <div>
                  <p className="text-lg font-medium text-gray-900">
                    Hello there!
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Start a conversation by asking anything about Manish. I'm here to help!
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Input Form */}
      <div className="border-t border-gray-100 px-6 py-4">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className={cn(
              "w-full rounded-2xl border border-gray-200 bg-gray-50 pr-12",
              "py-3 pl-4 text-base placeholder:text-gray-400",
              "focus:border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100",
              "disabled:opacity-50",
              "transition duration-200"
            )}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2",
              "rounded-xl bg-gray-900 p-2 text-white",
              "hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200",
              "disabled:bg-gray-200 disabled:hover:bg-gray-200",
              "transition duration-200"
            )}
          >
            <Send className={cn("h-5 w-5", isLoading && "animate-pulse")} />
          </button>
        </form>
      </div>
    </div>
  )
} 