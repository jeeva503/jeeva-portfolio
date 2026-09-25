import { useEffect, useRef } from 'react'

export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, particles, frame
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const COUNT_DIVISOR = 14000
    const LINK_DIST = 130

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * DPR
      canvas.height = height * DPR
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)

      const count = Math.min(70, Math.floor((width * height) / COUNT_DIVISOR))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(232, 163, 61, ${0.14 * (1 - dist / LINK_DIST)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        ctx.fillStyle = 'rgba(242, 239, 230, 0.55)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reduceMotion) frame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-field" />
}
