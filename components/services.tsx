"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Baby, Activity, Hospital, Zap, Clock, ArrowRight } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Baby,
      title: "Acompanhamento de Bebês",
      description: "Foco no crescimento craniofacial além do tratamento tradicional de cáries",
      color: "bbk-teal",
    },
    {
      icon: Activity,
      title: "Ortopedia Funcional dos Maxilares",
      description: "Correção e orientação do crescimento facial em crianças",
      color: "bbk-purple",
    },
    {
      icon: Hospital,
      title: "Cirurgias Complexas",
      description: "Procedimentos ambulatoriais e hospitalares com alta precisão",
      color: "bbk-pink",
    },
    {
      icon: Zap,
      title: "Laser de Alta Potência",
      description: "Tecnologia avançada para procedimentos cirúrgicos minimamente invasivos",
      color: "bbk-yellow",
    },
  ]

  const timeline = [
    { step: "Agendamento", description: "Contato inicial e agendamento da consulta" },
    { step: "Avaliação", description: "Exame completo e diagnóstico personalizado" },
    { step: "Plano", description: "Elaboração do plano de tratamento individualizado" },
    { step: "Acompanhamento", description: "Seguimento contínuo do desenvolvimento" },
  ]

  return (
    <section id="odontopediatria" className="py-16 bg-gradient-to-br from-bbk-yellow/5 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-bbk-slate mb-4">
            <span className="text-bbk-teal">Odontopediatria</span> Especializada
          </h2>
          <p className="text-lg text-bbk-slate/80 max-w-2xl mx-auto">
            Cuidado integral do desenvolvimento craniofacial com tecnologia avançada e abordagem humanizada
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-bbk-teal to-bbk-pink mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-${service.color}/10 flex items-center justify-center mb-4`}
                  >
                    <service.icon className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-bbk-slate">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-bbk-slate/70">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-sm border mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <Badge variant="secondary" className="bg-bbk-pink/10 text-bbk-pink px-4 py-2">
              <Clock className="mr-2 h-4 w-4" />
              Importante
            </Badge>
          </div>
          <p className="text-center text-bbk-slate/80 text-lg">
            <strong>Início de acompanhamento apenas até 10 anos.</strong>
            <br />
            Casos acima de 10 anos apenas se já em seguimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-bbk-slate text-center mb-8">Fluxo de Atendimento</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-bbk-teal text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-bbk-slate/30 ml-4 hidden md:block" />
                  )}
                </div>
                <h4 className="font-semibold text-bbk-slate mb-2">{item.step}</h4>
                <p className="text-sm text-bbk-slate/70">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
