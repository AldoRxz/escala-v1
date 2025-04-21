"use client"

import type React from "react"
import { useEffect } from "react"
import dynamic from "next/dynamic"

// ⚠️ IMPORT DINÁMICO del componente MagicCursor para evitar errores de hidratación
const MagicCursor = dynamic(
  () => import("@/lib/magic-ui").then((mod) => mod.MagicCursor),
  { ssr: false }
)

export default function MagicUIProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicializa las animaciones mágicas al montar el componente
    const revealElements = document.querySelectorAll(".magic-reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    )

    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      {children}
      <MagicCursor />
    </>
  )
}
