import { Metadata } from 'next'
import ChatInterface from '@/app/components/chat/ChatInterface'

export const metadata: Metadata = {
  title: 'Chat with AI | Manish Portfolio',
  description: 'Have a conversation with an AI assistant about Manish and his work.',
}

export default function ChatPage() {
  return (
    <main className="flex-1 overflow-hidden bg-white">
      <div className="container mx-auto h-[calc(100vh-4rem)] max-w-4xl px-4 py-6">
        <ChatInterface />
      </div>
    </main>
  )
} 