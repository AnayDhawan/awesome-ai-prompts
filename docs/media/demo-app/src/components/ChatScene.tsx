"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Typewriter from "@/components/Typewriter"

interface ChatSceneProps {
  onComplete: () => void
}

export default function ChatScene({ onComplete }: ChatSceneProps) {
  const [showMessage, setShowMessage] = useState(false)
  const [typeComplete, setTypeComplete] = useState(false)

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    // Show chat bubble
    timers.push(setTimeout(() => setShowMessage(true), 400))

    // Complete typing
    timers.push(setTimeout(() => setTypeComplete(true), 2800))

    // Transition to terminal
    timers.push(setTimeout(() => onComplete(), 4500))

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <div className="w-full max-w-2xl h-full flex flex-col justify-end">
      {/* Chat interface */}
      <div className="rounded-xl bg-[#18181b] border border-[#27272a] p-6 space-y-4">
        {/* System message */}
        <div className="flex justify-start">
          <div className="max-w-xs bg-[#27272a] rounded-lg px-4 py-3 text-sm text-[#a1a1aa]">
            How can I help you with this repository?
          </div>
        </div>

        {/* User message with typewriter */}
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-end"
          >
            <div className="max-w-xs bg-[#3b82f6] rounded-lg px-4 py-3 text-sm text-white">
              <Typewriter
                text="Explain this repository to me"
                speed={50}
                onComplete={() => setTypeComplete(true)}
              />
            </div>
          </motion.div>
        )}

        {/* Response indicator */}
        {typeComplete && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-start"
          >
            <div className="bg-[#27272a] rounded-lg px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#71717a] rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-[#71717a] rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-[#71717a] rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
