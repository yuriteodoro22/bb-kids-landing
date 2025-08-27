"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#inicio", label: "Início" },
    { href: "#quem-e-a-dra", label: "Sobre a Dra." },
    { href: "#especialidades", label: "Especialidades" },
    { href: "#videos", label: "Vídeos" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-bbk-teal to-bbk-pink rounded-full"></div>
            <span className="font-bold text-xl text-bbk-slate">Dra. Érika Bennaton</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-bbk-slate hover:text-bbk-teal transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              className="border-bbk-purple text-bbk-purple hover:bg-bbk-purple hover:text-white bg-transparent cursor-pointer"
              onClick={() => window.open("https://bbkidspediatria.com.br/", "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Conheça a BB KIDS
            </Button>
            <Button className="bg-bbk-teal hover:bg-bbk-teal/90 text-white cursor-pointer">Agendar Consulta</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-bbk-slate hover:text-bbk-teal transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="px-4 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full border-bbk-purple text-bbk-purple hover:bg-bbk-purple hover:text-white bg-transparent cursor-pointer"
                    onClick={() => window.open("https://bbkidspediatria.com.br/", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Conheça a BB KIDS
                  </Button>
                  <Button className="w-full bg-bbk-teal hover:bg-bbk-teal/90 text-white cursor-pointer">
                    Agendar Consulta
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
