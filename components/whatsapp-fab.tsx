"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Baby, Users, X } from "lucide-react"

export function WhatsAppFab() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappOptions = [
    {
      type: "patient",
      icon: Baby,
      label: "Pacientes",
      description: "Agendar consulta",
      color: "bbk-teal",
      message: "Olá! Gostaria de agendar uma consulta para meu filho na BB KIDS.",
    },
    {
      type: "professional",
      icon: Users,
      label: "Profissionais",
      description: "Trabalhe conosco",
      color: "bbk-purple",
      message: "Olá! Tenho interesse em fazer parte da equipe da BB KIDS.",
    },
  ]

  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/<WHATSAPP_NUMERO>?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 space-y-3"
          >
            {whatsappOptions.map((option) => (
              <motion.div
                key={option.type}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: option.type === "patient" ? 0.1 : 0.2 }}
              >
                <Button
                  onClick={() => handleWhatsApp(option.message)}
                  className={`bg-${option.color} hover:bg-${option.color}/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-auto py-3 px-4 rounded-full`}
                >
                  <div className="flex items-center space-x-3">
                    <option.icon className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-semibold text-sm">{option.label}</div>
                      <div className="text-xs opacity-90">{option.description}</div>
                    </div>
                  </div>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        } text-white`}
      >
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </motion.div>
      </Button>
    </div>
  )
}
