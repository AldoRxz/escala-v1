"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

// Hook para detectar cuando un elemento es visible en el viewport
export function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isInView }
}

// Componente para animaciones de aparición
export function MagicReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isInView } = useInView()

  return (
    <div ref={ref} className={`magic-reveal ${isInView ? "show" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// Componente para efectos de hover
export function MagicHover({ children }: { children: React.ReactNode }) {
  return <div className="magic-hover">{children}</div>
}

// Componente para efectos de brillo
export function MagicGlow({ children }: { children: React.ReactNode }) {
  return <div className="magic-glow">{children}</div>
}

// Componente para efectos de texto con animación
export function MagicText({ text }: { text: string }) {
  const { ref, isInView } = useInView()
  const words = text.split(" ")

  return (
    <h2 ref={ref} className="inline-block">
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block magic-reveal"
          style={{
            transitionDelay: `${i * 100}ms`,
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {word}{" "}
        </span>
      ))}
    </h2>
  )
}

// Componente para efectos de cursor personalizado
export function MagicCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updatePosition)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="w-6 h-6 rounded-full bg-red-500 opacity-30 animate-pulse" />
    </div>
  )
}
