"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building2, Users, TrendingUp, Heart } from "lucide-react"

export function BusinessSide() {
  return (
    <section id="empresaria" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Além da Medicina: Uma Visionária Empresária
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Co-CEO e Gestora da BB KIDS Centro Pediátrico, a Dra. Érika combina excelência clínica com visão empresarial
            inovadora, inspirando mulheres a equilibrarem maternidade, casamento e carreira de sucesso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="leading-7"
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5498.JPG-ArQiCVaofqN0PmZWJoNyZGyxjDbrx8.jpeg"
              alt="Dra. Érika Bennaton - Empresária"
              className="w-full h-[830px] object-cover object-[center_5%] rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Building2 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-2">Co-CEO da BB KIDS</h3>
                  <p className="text-gray-700">
                    Liderança estratégica na gestão de uma das clínicas pediátricas mais inovadoras, focada em
                    excelência no atendimento e tecnologia de ponta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-2">Gestão de Equipes</h3>
                  <p className="text-gray-700">
                    Coordenação de equipe multidisciplinar especializada, garantindo padrão de excelência em todos os
                    atendimentos pediátricos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-2">Inovação Contínua</h3>
                  <p className="text-gray-700">
                    Implementação de tecnologias avançadas e metodologias inovadoras para proporcionar a melhor
                    experiência às famílias.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-2">Inspirando Mulheres</h3>
                  <p className="text-gray-700">
                    Demonstrando que é possível conciliar maternidade, casamento e uma carreira bem-sucedida com
                    equilíbrio, sendo exemplo para outras mulheres.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-teal-100 p-6 rounded-xl border-l-4 border-purple-600">
              <h4 className="text-lg font-semibold text-purple-900 mb-2">Você é um profissional da saúde?</h4>
              <p className="text-gray-700 mb-4">
                Estamos sempre em busca de profissionais talentosos para integrar nossa equipe de excelência. Junte-se a
                nós em uma clínica que prioriza inovação e cuidado humanizado.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full cursor-pointer"
              onClick={() =>
                window.open(
                  "https://wa.me/+5511978858301?text=Olá! Sou um profissional da saúde e gostaria de saber mais sobre oportunidades na equipe BB KIDS.",
                  "_blank",
                )
              }
            >
              Venha fazer parte da equipe BB KIDS
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
