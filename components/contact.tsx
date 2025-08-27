"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { MapPin, Clock, Car, MessageCircle, Users, Star, Navigation, ExternalLink } from "lucide-react"

const MAPS_URL =
  "https://www.google.com/maps/place/BB+Kids+Centro+Pedi%C3%A1trico+em+Mogi+das+Cruzes/@-23.5221653,-46.1680073,17z/data=!3m1!4b1!4m6!3m5!1s0x94cdd9cf73fc15fb:0xaed9649ce7280996!8m2!3d-23.5221653!4d-46.1680073!16s%2Fg%2F11q7f_1w_y?hl=pt&entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
const ENDERECO_COMPLETO = "Av. São Paulo, 1115 - Vila Oliveira, Mogi das Cruzes - SP, 08790-150"

export function Contact() {
  const handleWhatsAppPacientes = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta para meu filho.", "_blank")
  }

  const handleWhatsAppProfissionais = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Tenho interesse em fazer parte da equipe BB KIDS.", "_blank")
  }

  const handleRotas = () => {
    window.open(MAPS_URL, "_blank")
  }

  const handleVerMapa = () => {
    window.open(MAPS_URL, "_blank")
  }

  return (
    <section id="contato" className="py-16 bg-gradient-to-br from-bbk-teal/5 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-bbk-slate mb-4">
            <span className="text-bbk-teal">Localização</span> & Contato
          </h2>
          <p className="text-lg text-bbk-slate/80 max-w-2xl mx-auto">
            Entre em contato conosco via WhatsApp para agendamentos ou informações sobre nossa equipe
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-bbk-teal to-bbk-pink mx-auto mt-4"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Location Info */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Info Card - Estilo Google Maps */}
                <div className="bg-white p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-bbk-slate">BB Kids Centro Pediátrico em Mogi das Cruzes</h3>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-current" : i === 4 ? "text-yellow-400 fill-current opacity-70" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-bbk-slate">4,7</span>
                      <span className="text-sm text-bbk-slate/60">(74 avaliações)</span>
                    </div>

                    <div className="flex items-start space-x-2 text-bbk-slate/80">
                      <MapPin className="h-4 w-4 mt-1 text-bbk-teal flex-shrink-0" />
                      <span className="text-sm">{ENDERECO_COMPLETO}</span>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-bbk-slate/70">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Seg-Sex: 8h às 18h</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Car className="h-4 w-4" />
                        <span>Estacionamento</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button
                      onClick={handleRotas}
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 border-bbk-teal text-bbk-teal hover:bg-bbk-teal hover:text-white bg-transparent cursor-pointer"
                    >
                      <Navigation className="h-4 w-4" />
                      <span>Rotas</span>
                    </Button>

                    <Button
                      onClick={handleVerMapa}
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 text-bbk-teal hover:bg-bbk-teal/10 cursor-pointer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Ver mapa ampliado</span>
                    </Button>
                  </div>
                </div>

                {/* Mapa */}
                <div className="h-80 lg:h-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.123456789!2d-46.1680073!3d-23.5221653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd9cf73fc15fb%3A0xaed9649ce7280996!2sBB%20Kids%20Centro%20Pedi%C3%A1trico%20em%20Mogi%20das%20Cruzes!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Button
                size="lg"
                onClick={handleWhatsAppPacientes}
                className="bg-bbk-teal hover:bg-bbk-teal/90 text-white h-auto py-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-2">
                  <MessageCircle className="h-8 w-8" />
                  <div className="text-center">
                    <div className="font-semibold text-base">WhatsApp Pacientes</div>
                    <div className="text-sm opacity-90">Agendamentos e consultas</div>
                  </div>
                </div>
              </Button>

              <Button
                size="lg"
                onClick={handleWhatsAppProfissionais}
                variant="outline"
                className="border-2 border-bbk-purple text-bbk-purple hover:bg-bbk-purple hover:text-white h-auto py-6 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-2">
                  <Users className="h-8 w-8" />
                  <div className="text-center">
                    <div className="font-semibold text-base">WhatsApp Profissionais</div>
                    <div className="text-sm opacity-90">Faça parte da equipe</div>
                  </div>
                </div>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
