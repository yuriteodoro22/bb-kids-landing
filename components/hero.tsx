"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Baby, Award, Hospital, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-white to-bbk-yellow/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-bbk-slate leading-tight">
                <span className="text-bbk-teal">Dra. Érika Bennaton</span>
                <br />
                Odontopediatra Especialista
              </h1>
              <p className="text-lg text-bbk-slate/80 leading-relaxed">
                Especialista em Odontopediatria e Ortopedia Funcional dos Maxilares, com expertise em crescimento
                craniofacial e cirurgias ambulatoriais e hospitalares (com e sem laser de alta potência). Co-CEO da BB
                KIDS Centro Pediátrico.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-bbk-teal hover:bg-bbk-teal/90 text-white  sm:flex-none cursor-pointer"
              >
                <Baby className="mr-2 h-5 w-5" />
                Agendar Consulta
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-bbk-purple text-bbk-purple hover:bg-bbk-purple hover:text-white  sm:flex-none bg-transparent cursor-pointer"
                onClick={() => window.open("https://bbkidspediatria.com.br/", "_blank")}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Conheça a BB KIDS
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-bbk-yellow/20 text-bbk-slate">
                <Award className="mr-1 h-3 w-3" />
                20+ anos de experiência
              </Badge>
              <Badge variant="secondary" className="bg-bbk-pink/20 text-bbk-slate">
                <Hospital className="mr-1 h-3 w-3" />
                HMI/UNESP
              </Badge>
              <Badge variant="secondary" className="bg-bbk-purple/20 text-bbk-slate">
                Hospital Infantil Sabará
              </Badge>
              <Badge variant="secondary" className="bg-bbk-teal/20 text-bbk-slate">
                Co-CEO BB KIDS
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Forma orgânica de fundo */}
              <div className="relative w-96 h-96">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-bbk-teal/20 to-bbk-purple/20"
                  style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  }}
                />

                {/* Elementos decorativos */}
                <div className="absolute -top-4 -left-4 w-8 h-8">
                  <div className="grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-bbk-pink rounded-full opacity-60" />
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 w-12 h-12">
                  <div className="space-y-1">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="flex space-x-1">
                        {[...Array(3)].map((_, j) => (
                          <div key={j} className="w-1 h-6 bg-bbk-yellow/60 rounded-full transform rotate-45" />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Imagem principal */}
                <div className="absolute inset-8">
                  <div className="w-full h-full bg-white p-2 shadow-2xl rounded-2xl">
                    <img
                      src="/images/dra-erika-hero-nova.jpg"
                      alt="Dra. Érika Bennaton - Odontopediatra"
                      className="w-full h-full object-cover object-center rounded-xl"
                    />
                  </div>
                </div>

                {/* Ícone flutuante */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-bbk-teal rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <Baby className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
