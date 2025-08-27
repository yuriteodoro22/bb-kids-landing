"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function Videos() {
  const testimonials = [
    {
      id: 1,
      name: "Jônatas Dias Romero",
      rating: 5,
      timeAgo: "8 meses atrás",
      review:
        "Estrutura acolhedora, com tantos brinquedos que as crianças não querem ir embora. As colaboradoras da recepção são muito atenciosas e simpáticas. Por fim, a Dra. Andressa é extremamente qualificada e o atendimento é humanizado, deixando os pais tranquilos de que os filhos estão em excelente cuidado.",
      avatar: "J",
    },
    {
      id: 2,
      name: "Ricardo BreMa (Maca)",
      rating: 5,
      timeAgo: "8 meses atrás",
      review:
        "Não tenho dúvida em indicar a BB Kids. O tratamento de nossa filha com a Dra Érika Bennatton e a Dra Joice está a pleno vapor e com um resultado extraordinário! Tudo ali funciona plenamente, todas muito educadas, uma estrutura impecável e acima de tudo competência e carinho com nossas crianças!!",
      avatar: "R",
    },
    {
      id: 3,
      name: "Olívia Torraga",
      rating: 5,
      timeAgo: "8 meses atrás",
      review:
        "Melhor atendimento, melhores profissionais! Amamos a Dra Érika! Sempre com muito carinho e gentileza ela atende a minha filha. Só tenho a agradecer por tudo que faz e fez por nós ❤️",
      avatar: "O",
    },
    {
      id: 4,
      name: "Thalita Tavares",
      rating: 5,
      timeAgo: "8 meses atrás",
      review:
        "A BBKids tem meu coração, lugar impecável na organização, recepção sempre atenciosa. A rede de profissionais então a capacidade deles a empatia com nossos filhos são tudo. A Dra Andressa um ser humano admirável que tem o dom de cuidar dos pequenos e as mamães a cuidarem também.",
      avatar: "T",
    },
  ]

  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-purple-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Alguns <span className="text-pink-600">Depoimentos</span> sobre nossa clínica
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Veja o que nossos pacientes e famílias falam sobre o cuidado especializado da BB KIDS Centro Pediátrico
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-bbk-purple to-bbk-teal rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-purple-900">{testimonial.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{testimonial.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="h-6 w-6 text-bbk-teal/30 absolute -top-2 -left-1" />
                    <p className="text-gray-700 leading-relaxed pl-6 italic">{testimonial.review}</p>
                  </div>
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
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Avalie nossa clínica</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Sua opinião é muito importante para nós. Compartilhe sua experiência na BB KIDS Centro Pediátrico
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/BB+Kids+Centro+Pedi%C3%A1trico+em+Mogi+das+Cruzes/@-23.5221653,-46.1680073,17z/data=!3m1!4b1!4m6!3m5!1s0x94cdd9cf73fc15fb:0xaed9649ce7280996!8m2!3d-23.5221653!4d-46.1680073!16s%2Fg%2F11q7f_1w_y?hl=pt&entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D",
                  "_blank",
                )
              }
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Deixar Avaliação →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
