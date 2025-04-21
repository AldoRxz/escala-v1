import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MagicUIProvider from "@/components/magic-ui-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Escala+ | Digital Advertising Agency",
  description:
    "Professional digital advertising services including web development, automations, chatbots, and digital marketing.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MagicUIProvider>{children}</MagicUIProvider>
      </body>
    </html>
  )
}
