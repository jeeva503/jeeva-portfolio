import { useEffect, useRef } from 'react'
import './Background.css'

export default function Background() {
  const glowRef = useRef(null)

  useEffect(() => {
    let frame
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 3
    let cx = mx
    let cy = my

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const loop = () => {
      cx += (mx - cx) * 0.08
      cy += (my - cy) * 0.08
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${cx}px, ${cy}px)`
      }
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    frame = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-orb bg-orb--a" />
      <div className="bg-orb bg-orb--b" />
      <div className="bg-orb bg-orb--c" />
      <div className="bg-glow" ref={glowRef} />
      <div className="bg-grid" />
      <div className="bg-vignette" />
    </div>
  )
}
