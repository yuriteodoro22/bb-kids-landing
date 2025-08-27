"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Users, TrendingUp, Award, Heart, Calendar, Lightbulb } from "lucide-react"

export function Management() {
  const benefits = [
    {
      icon: Award,
      title: "Supervisão Direta",
      description: "Acompanhamento e mentoria clínica da Dra. Érika",
    },
    {
      icon: Lightbulb,
      title: "Protocolos Sólidos",
      description: "Metodologias comprovadas e padronizadas",
    },
    {
      icon: Heart,
      title: "Cultura Acolhedora",
      description: "Ambiente de trabalho humanizado e colaborativo",
    },
    {
      icon: Calendar,
      title: "Agenda Estruturada",
      description: "Organização eficiente do tempo e atendimentos",
    },
  ]

  return (
    <section id="gestao" className="py-16 bg-gradient-to-br from-bbk-purple/5 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-bbk-slate mb-4">
            <span className="text-bbk-purple">Empresária</span> & Gestão
          </h2>
          <p className="text-lg text-bbk-slate/80 max-w-2xl mx-auto">
            Liderança na coordenação de odontopediatria, expansão de equipe e mentoria clínica
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-bbk-purple to-bbk-yellow mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-bbk-purple/10 text-bbk-purple">
                <TrendingUp className="mr-2 h-4 w-4" />
                Crescimento Profissional
              </Badge>
              <h3 className="text-2xl font-bold text-bbk-slate">Cresça com protocolos sólidos e supervisão direta</h3>
              <p className="text-lg text-bbk-slate/80 leading-relaxed">
                Como co-CEO da BB KIDS, a Dra. Érika lidera uma equipe em constante expansão, oferecendo oportunidades
                únicas de desenvolvimento profissional em um ambiente que valoriza a excelência clínica e o cuidado
                humanizado.
              </p>
              <p className="text-lg text-bbk-slate/80 leading-relaxed">
                Nossa filosofia de gestão combina protocolos rigorosos com flexibilidade para inovação, criando um
                espaço onde profissionais podem crescer enquanto oferecem o melhor cuidado aos nossos pequenos
                pacientes.
              </p>
            </div>

            <Button size="lg" className="bg-bbk-purple hover:bg-bbk-purple/90 text-white cursor-pointer">
              <Users className="mr-2 h-5 w-5" />
              Aplicar para a Equipe
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-bbk-purple/10 rounded-lg flex items-center justify-center mb-3">
                    <benefit.icon className="h-6 w-6 text-bbk-purple" />
                  </div>
                  <CardTitle className="text-lg text-bbk-slate">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-bbk-slate/70">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-sm border"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-bbk-slate mb-4">Junte-se à Nossa Equipe</h3>
            <p className="text-bbk-slate/80 mb-6">
              Estamos sempre em busca de profissionais apaixonados por odontopediatria que compartilhem nossa visão de
              cuidado integral e humanizado.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="outline" className="border-bbk-teal text-bbk-teal">
                Odontopediatras
              </Badge>
              <Badge variant="outline" className="border-bbk-purple text-bbk-purple">
                Ortodontistas
              </Badge>
              <Badge variant="outline" className="border-bbk-pink text-bbk-pink">
                Auxiliares
              </Badge>
              <Badge variant="outline" className="border-bbk-yellow text-bbk-slate">
                Recepcionistas
              </Badge>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="border-bbk-purple text-bbk-purple hover:bg-bbk-purple hover:text-white bg-transparent cursor-pointer"
            >
              Ver Oportunidades Disponíveis
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
