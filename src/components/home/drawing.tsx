'use client'

import { useEffect, useRef, useState } from 'react'

// Drawing component
export default function Drawing({ className }: { className?: string }) {
  const [drawing, setDrawing] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      canvas.style.width = '100%'
      canvas.style.height = '100%'

      // Setting the context to enable us draw
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.lineCap = 'round'
        ctx.strokeStyle = '#00CB2C'
        ctx.lineWidth = 4
        ctxRef.current = ctx
      }

      const handleResize = () => {
        if (ctx) {
          ctx.canvas.height = canvas.offsetHeight
          ctx.canvas.width = canvas.offsetWidth
          ctx.lineCap = 'round'
          ctx.strokeStyle = '#00CB2C'
          ctx.lineWidth = 4
          ctxRef.current = ctx
        }
      }

      handleResize()
      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const startDraw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent
    ctxRef.current?.beginPath()
    ctxRef.current?.moveTo(offsetX, offsetY)
    setDrawing(true)
  }

  const stopDraw = () => {
    ctxRef.current?.closePath()
    setDrawing(false)
  }

  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing) return
    const { offsetX, offsetY } = nativeEvent
    ctxRef.current?.lineTo(offsetX, offsetY)
    ctxRef.current?.stroke()
  }

  return (
    <canvas
      className={className}
      onMouseDown={startDraw}
      onMouseUp={stopDraw}
      onMouseMove={draw}
      onMouseLeave={stopDraw}
      ref={canvasRef}
    />
  )
}
