import React, { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  speed: number
}

export function StarfieldAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const stars: Star[] = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.2,
      })
    }

    function animateStars() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height) // Non-null assertion for canvas
      ctx!.fillStyle = 'rgba(255, 255, 255, 0.8)' 
      stars.forEach((star) => {
        star.y -= star.speed
        if (star.y < 0) star.y = canvas!.height // Non-null assertion for canvas

        ctx!.beginPath()
        ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx!.fill()
      })
      requestAnimationFrame(animateStars)
    }

    animateStars()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
