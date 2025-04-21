"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
      setIsDesktop(window.innerWidth >= 1024)
    }

    // Ejecutar al montar
    checkScreenSize()

    // Agregar event listener para cambios de tamaño
    window.addEventListener("resize", checkScreenSize)

    // Limpiar event listener
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return { isMobile, isTablet, isDesktop }
}
