"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react"
import Image from "next/image"

const ENDERECO_COMPLETO = "Av. Principal, 1234 - Bairro, Cidade"
const TELEFONE_PRINCIPAL = "(12) 3456-7890"
const EMAIL_CONTATO = "contato@bbkids.com"

export function Footer() {
  return (
    <footer className="bg-bbk-slate text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/images/bbkids-logo.png"
                  alt="BB KIDS Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl">BB KIDS</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Centro Pediátrico especializado em odontopediatria com foco no crescimento craniofacial e cuidado integral
              da criança.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-bbk-teal transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-bbk-teal transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-bbk-teal transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#odontopediatria" className="hover:text-bbk-teal transition-colors">
                  Odontopediatria
                </a>
              </li>
              <li>
                <a href="#odontopediatria" className="hover:text-bbk-teal transition-colors">
                  Ortopedia Funcional
                </a>
              </li>
              <li>
                <a href="#odontopediatria" className="hover:text-bbk-teal transition-colors">
                  Cirurgias
                </a>
              </li>
              <li>
                <a href="#odontopediatria" className="hover:text-bbk-teal transition-colors">
                  Laser de Alta Potência
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#quem-e-a-dra" className="hover:text-bbk-teal transition-colors">
                  Quem é a Dra.
                </a>
              </li>
              <li>
                <a href="#gestao" className="hover:text-bbk-teal transition-colors">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-bbk-teal transition-colors">
                  Vídeos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-bbk-teal transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-bbk-teal" />
                <span>{ENDERECO_COMPLETO}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-bbk-teal" />
                <span>{TELEFONE_PRINCIPAL}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-bbk-teal" />
                <span>{EMAIL_CONTATO}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60"
        >
          <p className="mb-2">© 2025 BB KIDS Centro Pediátrico. Todos os direitos reservados.</p>
          <p className="text-xs">
            Este site coleta dados pessoais conforme nossa Política de Privacidade. Ao continuar navegando, você
            concorda com nossos termos.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
