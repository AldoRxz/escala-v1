"use client"

import type React from "react"

import { useEffect } from "react"
import { MagicCursor } from "@/lib/magic-ui"

export default function MagicUIProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicializar las animaciones cuando el componente se monta
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
      },
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
