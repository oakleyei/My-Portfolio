import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "Ethan Oakley | Finance, Leadership & Innovation",
  description:
    "Finance professional, D1 NCAA athlete, UNC Chapel Hill graduate student, and entrepreneur. Explore my portfolio of work in finance, education, and leadership.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
