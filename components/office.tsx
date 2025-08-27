"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Award } from "lucide-react"

export function Office() {
  return (
    <section id="consultorio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">Ambiente Profissional de Excelência</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Um consultório moderno e acolhedor, equipado com tecnologia de ponta para proporcionar o melhor atendimento
            odontopediátrico.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <video
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video%20by%20draerikabennaton_20250825191137123-jgXO2Ecqd3l88riYDcTCsMjSQ53Z9H.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            >
              Seu navegador não suporta vídeos HTML5.
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-purple-900 mb-4">Tecnologia e Conforto</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Nosso consultório foi cuidadosamente projetado para criar um ambiente acolhedor e tranquilo, onde as
                crianças se sintam seguras e confortáveis durante todo o tratamento.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Award className="h-5 w-5 text-purple-600" />
                </div>
                <span className="text-gray-700">Equipamentos de última geração</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-teal-100 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-teal-600" />
                </div>
                <span className="text-gray-700">Localização privilegiada e acessível</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-pink-600" />
                </div>
                <span className="text-gray-700">Horários flexíveis para sua conveniência</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6941.JPG-UOA37NFCk2df1I5J3dM2cqWjsYZje9.jpeg"
              alt="Dra. Érika durante procedimento"
              className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-semibold mb-2">Precisão Técnica</h4>
              <p className="text-sm opacity-90">Procedimentos realizados com máxima precisão</p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2877.JPG-rEcpYXPOyC5XOSW7UH30ZfXi3oEWgt.jpeg"
              alt="Dra. Érika sorrindo durante atendimento"
              className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h4 className="text-xl font-semibold mb-2">Cuidado Humanizado</h4>
              <p className="text-sm opacity-90">Atendimento acolhedor e personalizado</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
