"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"

export function About() {
  return (
    <section id="quem-e-a-dra" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-bbk-slate mb-4">
              Quem é a <span className="text-bbk-teal">Dra. Érika</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-bbk-teal to-bbk-pink mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-bbk-slate/80 leading-relaxed">
                Sou Érika Bennaton, sócia Co-CEO da BB Kids Centro Pediátrico, sou casada, Mamãe de 3, Eduardo, Beatriz
                e Guilherme.
              </p>
              <p className="text-lg text-bbk-slate/80 leading-relaxed">
                Graduada em Odontologia há mais de 20 anos, especialista em Odontopediatria pela USP, dentista Amigo da
                Amamentação, calibrada em HMI pela UNESP Araraquara, apaixonada por estudar a língua e os freios orais.
              </p>
              <p className="text-lg text-bbk-slate/80 leading-relaxed">
                Especialista em Ortopedia Funcional dos Maxilares pelo NEO, dentista credenciada ao Hospital Infantil
                Sabará para realização de atendimentos odontológicos em âmbito hospitalar. Habilitada em lasers pelo
                Lelo-USP.
              </p>
              <p className="text-lg text-bbk-slate/80 leading-relaxed">
                Meu propósito com as famílias, é proporcionar uma experiência odontológica lúdica, com um olhar
                individualizado, com abordagens psico-comportamentais, para cada faixa etária, criando vínculo com a
                família, para que juntos possamos alcançar o pleno desenvolvimento orofacial de nossas crianças, levando
                nível nobre de prevenção desde o bebê até os adolescentes.
              </p>

              <Button
                variant="outline"
                className="border-bbk-pink text-bbk-pink hover:bg-bbk-pink hover:text-white bg-transparent cursor-pointer"
                onClick={() => window.open("https://www.instagram.com/draerikabennaton/", "_blank")}
              >
                <Instagram className="mr-2 h-4 w-4" />
                Seguir @draerikabennaton
              </Button>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                <img
                  src="/images/dra-erika-hero.jpg"
                  alt="Dra. Érika Bennaton - Especialista em Odontopediatria"
                  className="w-96 h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
