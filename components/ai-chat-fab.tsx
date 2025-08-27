"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import Image from "next/image"

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

export function AiChatFab() {
  const [isOpen, setIsOpen] = useState(true)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialTyping, setIsInitialTyping] = useState(false)
  const [hasShownInitialMessage, setHasShownInitialMessage] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !hasShownInitialMessage) {
      setIsInitialTyping(true)

      const timer = setTimeout(() => {
        const initialMessage: Message = {
          id: "initial",
          content:
            "Olá eu sou a Kidzinha a assistente virtual da Doutora Érika Bennaton da BB KIDS Centro Pediátrico. Você está a procura de atendimento personalizado para seu filho ou você é um profissional da saúde que queira fazer parte do time BBKids?",
          isUser: false,
          timestamp: new Date(),
        }
        setMessages([initialMessage])
        setIsInitialTyping(false)
        setHasShownInitialMessage(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isOpen, hasShownInitialMessage])

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      console.log("[v0] Enviando mensagem para API")

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
          context: `Você é a Kidzinha, assistente virtual da Dra. Érika Bennaton da BB KIDS Centro Pediátrico. 

INSTRUÇÕES ESPECÍFICAS:

1. Se a pessoa está procurando atendimento para o filho, responda:
"Antes de te direcionar para o atendimento temos umas informações importantes: a Doutora Érika não inicia tratamento de acompanhamento em pacientes com mais de 10 anos. Apenas os dela que já estão em acompanhamento. Dito isso esse é o link para o atendimento via whatsapp: https://wa.me/+5511978858301 lá você poderá tirar todas as suas dúvidas sobre o atendimento"

2. Se for profissional querendo fazer parte da equipe, responda:
"Ficamos muito felizes em saber que você está querendo fazer parte da nossa equipe! Para continuar o processo entre em contato com a gente através do whatsapp: https://wa.me/+5511978858301 espero que no futuro você faça parte da nossa equipe."

3. Para outras perguntas, seja amigável e direcione para o WhatsApp quando necessário.

Seja sempre profissional, amigável e focada em odontopediatria.`,
        }),
      })

      console.log("[v0] Status da resposta:", response.status)

      if (!response.ok) {
        console.error("[v0] Resposta não OK:", response.status, response.statusText)
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      console.log("[v0] Dados recebidos:", data)

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || data.error || "Desculpe, não consegui processar sua mensagem. Tente novamente.",
        isUser: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("[v0] Erro ao enviar mensagem:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Desculpe, ocorreu um erro de conexão. Tente novamente em alguns instantes.",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  {!message.isUser && (
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                      <Image
                        src="/images/kidzinha-avatar.png"
                        alt="Kidzinha"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      message.isUser
                        ? "bg-bbk-purple text-white rounded-br-md"
                        : "bg-gray-100 text-gray-800 rounded-bl-md"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {(isLoading || isInitialTyping) && (
                <div className="flex justify-start">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                    <Image
                      src="/images/kidzinha-avatar.png"
                      alt="Kidzinha"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-bbk-purple focus:border-transparent"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-bbk-purple hover:bg-bbk-purple/90 p-0 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-bbk-purple hover:bg-bbk-purple/90"
        } text-white`}
      >
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </motion.div>
      </Button>
    </div>
  )
}
