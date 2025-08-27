"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

const photos = [
  {
    src: "/images/dra-erika-atendimento.jpg",
    alt: "Dra. Érika atendendo criança em ambiente lúdico com monstrinhos coloridos",
    description: "Atendimento especializado em odontopediatria",
  },
  {
    src: "/images/dra-erika-familia.jpg",
    alt: "Dra. Érika com sua família - marido e três filhos",
    description: "Mãe de Eduardo (18), Beatriz (15) e Guilherme (11)",
  },
  {
    src: "/images/dra-erika-crianca-escova.jpg",
    alt: "Dra. Érika ensinando criança a escovar os dentes",
    description: "Educação e prevenção em saúde bucal infantil",
  },
  {
    src: "/images/dra-erika-cirurgia-equipe.jpg",
    alt: "Dra. Érika em centro cirúrgico com equipe médica",
    description: "Expertise em cirurgias ambulatoriais e hospitalares",
  },
  {
    src: "/images/dra-erika-procedimento-roxo.jpg",
    alt: "Dra. Érika realizando procedimento com luvas roxas",
    description: "Técnicas avançadas em odontopediatria",
  },
  {
    src: "/images/dra-erika-cirurgia-verde.jpg",
    alt: "Dra. Érika sorrindo durante procedimento cirúrgico",
    description: "Cuidado humanizado e profissional",
  },
  {
    src: "/images/dra-erika-congresso.jpg",
    alt: "Dra. Érika apresentando trabalho em congresso de odontopediatria",
    description: "Participação ativa em congressos e pesquisas científicas",
  },
  {
    src: "/images/dra-erika-evento-saude.jpg",
    alt: "Dra. Érika em evento profissional da área da saúde",
    description: "Participação em eventos e networking profissional",
  },
  {
    src: "/images/dra-erika-apresentacao-congresso.jpg",
    alt: "Dra. Érika apresentando trabalho científico no Teatro APCD",
    description: "Apresentação de pesquisas em congressos científicos",
  },
  {
    src: "/images/dra-erika-consultorio-colorido.jpg",
    alt: "Dra. Érika em seu consultório moderno com teto colorido",
    description: "Ambiente acolhedor e lúdico para crianças",
  },
]

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4,
  }

  const maxSlides = Math.max(0, photos.length - itemsPerView.desktop)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxSlides ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxSlides : prev - 1))
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % photos.length)
  }

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça um pouco sobre a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
              Dra. Érika
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Uma jornada profissional e pessoal dedicada ao cuidado especializado em odontopediatria
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView.desktop)}%)`,
                width: `${(photos.length / itemsPerView.desktop) * 100}%`,
              }}
            >
              {photos.map((photo, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4">
                  <div
                    className="relative h-64 md:h-72 cursor-pointer group rounded-xl overflow-hidden shadow-lg"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium leading-tight">{photo.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-purple-600 p-2 rounded-full shadow-md transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-purple-600 p-2 rounded-full shadow-md transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxSlides + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  index === currentIndex ? "bg-purple-600 scale-125" : "bg-purple-300 hover:bg-purple-400"
                }`}
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-[80vh]">
                  <Image
                    src={photos[lightboxIndex].src || "/placeholder.svg"}
                    alt={photos[lightboxIndex].alt}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-lg font-medium bg-black/50 rounded-lg px-4 py-2 inline-block">
                    {photos[lightboxIndex].description}
                  </p>
                </div>

                {/* Controles do lightbox */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>

                <button
                  onClick={prevLightbox}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextLightbox}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
