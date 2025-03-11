'use client'

import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { cn } from '@/app/lib/utils'

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={cn(
        "mb-6 flex",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] space-y-1 rounded-2xl px-5 py-3",
          isUser
            ? "bg-gray-900 text-white"
            : "bg-gray-50 text-gray-900"
        )}
      >
        <p className="text-[15px] leading-relaxed">{message.content}</p>
        <p
          className={cn(
            "text-xs",
            isUser
              ? "text-gray-300"
              : "text-gray-400"
          )}
        >
          {format(message.timestamp, 'HH:mm')}
        </p>
      </div>
    </motion.div>
  )
} 