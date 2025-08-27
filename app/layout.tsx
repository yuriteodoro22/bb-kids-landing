import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dra. Érika Bennaton | Odontopediatra Especialista",
  description:
    "Odontopediatra especialista em crescimento craniofacial, ortopedia funcional e cirurgias. Dra. Érika Bennaton - Co-CEO da BB KIDS Centro Pediátrico. Agende sua consulta.",
  keywords:
    "Érika Bennaton, odontopediatria, bebês, crianças, crescimento craniofacial, ortopedia funcional, cirurgia, laser, São Paulo, odontopediatra",
  authors: [{ name: "Dra. Érika Bennaton" }],
  openGraph: {
    title: "Dra. Érika Bennaton | Odontopediatra Especialista",
    description: "Odontopediatra especialista em crescimento craniofacial e ortopedia funcional",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4894.JPG-cL10GyLiPBY8GjeePNzU8ooK1cAg9B.jpeg",
        width: 1200,
        height: 630,
        alt: "Dra. Érika Bennaton - Odontopediatra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Érika Bennaton | Odontopediatra Especialista",
    description: "Odontopediatra especialista em crescimento craniofacial e ortopedia funcional",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
