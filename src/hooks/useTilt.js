import { useRef } from 'react'

export function useTilt(strength = 8) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * strength
    const rotateX = (0.5 - py) * strength
    node.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
    node.style.setProperty('--mx', `${px * 100}%`)
    node.style.setProperty('--my', `${py * 100}%`)
  }

  const onMouseLeave = () => {
    const node = ref.current
    if (!node) return
    node.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return { ref, onMouseMove, onMouseLeave }
}
