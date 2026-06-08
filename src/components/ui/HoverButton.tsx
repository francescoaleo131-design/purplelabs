"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface CustomCSSProperties extends React.CSSProperties {
  "--circle-start"?: string
  "--circle-end"?: string
}

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const internalRef = React.useRef<HTMLButtonElement>(null)
    
    React.useImperativeHandle(forwardedRef, () => internalRef.current!)

    const [isListening, setIsListening] = React.useState(false)
    const [circles, setCircles] = React.useState<Array<{
      id: number
      x: number
      y: number
      color: string
      fadeState: "in" | "out" | null
    }>>([])
    const lastAddedRef = React.useRef(0)

    const createCircle = React.useCallback((x: number, y: number) => {
      const buttonWidth = internalRef.current?.offsetWidth || 0
      const xPos = x / buttonWidth
      const color = `linear-gradient(to right, var(--circle-start) ${xPos * 100}%, var(--circle-end) ${
        xPos * 100
      }%)`

      setCircles((prev) => [
        ...prev,
        { id: Date.now() + Math.random(), x, y, color, fadeState: null },
      ])
    }, [])

    const handlePointerMove = React.useCallback(
      (event: React.PointerEvent<HTMLButtonElement>) => {
        if (!isListening) return
        
        const currentTime = Date.now()
        if (currentTime - lastAddedRef.current > 60) {
          lastAddedRef.current = currentTime
          const rect = event.currentTarget.getBoundingClientRect()
          const x = event.clientX - rect.left
          const y = event.clientY - rect.top
          createCircle(x, y)
        }
      },
      [isListening, createCircle]
    )

    const handlePointerEnter = React.useCallback(() => {
      setIsListening(true)
    }, [])

    const handlePointerLeave = React.useCallback(() => {
      setIsListening(false)
    }, [])

    React.useEffect(() => {
      circles.forEach((circle) => {
        if (!circle.fadeState) {
          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) =>
                c.id === circle.id ? { ...c, fadeState: "in" } : c
              )
            )
          }, 0)

          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) =>
                c.id === circle.id ? { ...c, fadeState: "out" } : c
              )
            )
          }, 800)

          setTimeout(() => {
            setCircles((prev) => prev.filter((c) => c.id !== circle.id))
          }, 1800)
        }
      })
    }, [circles])

    return (
      <button
        ref={internalRef}
        className={cn(
          // Forzato il layout interno strutturato anche a livello di foglio di stile base del bottone
          "relative isolate inline-flex items-center justify-center gap-3 px-12 py-5 rounded-xl",
          "text-white font-bold text-lg tracking-wider select-none whitespace-nowrap",
          "bg-purple-950/20 border border-purple-500/30",
          "cursor-pointer overflow-hidden backdrop-blur-md",
          "transition-all duration-300 ease-out",
          
          "before:content-[''] before:absolute before:inset-0",
          "before:rounded-[inherit] before:pointer-events-none",
          "before:z-[1]",
          "before:shadow-[inset_0_0_0_1px_rgba(168,85,247,0.2),inset_0_0_25px_0_rgba(168,85,247,0.2),0_4px_25px_rgba(168,85,247,0.15)]",
          "before:transition-transform before:duration-200",
          
          "hover:border-purple-400/60 hover:text-purple-100",
          "hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]",
          "hover:-translate-y-0.5",
          "active:scale-[0.98] active:before:scale-[0.975]",
          className
        )}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
        style={{
          "--circle-start": "#a855f7",
          "--circle-end": "#ec4899",
        } as CustomCSSProperties}
      >
        {circles.map(({ id, x, y, color, fadeState }) => (
          <div
            key={id}
            className={cn(
              "absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full",
              "blur-2xl pointer-events-none z-[-1] transition-opacity duration-300",
              fadeState === "in" && "opacity-45",
              fadeState === "out" && "opacity-0 duration-[1s]",
              !fadeState && "opacity-0"
            )}
            style={{
              left: x,
              top: y,
              background: color,
            }}
          />
        ))}
        <span className="relative z-10 inline-flex items-center justify-center gap-3">{children}</span>
      </button>
    )
  }
)

HoverButton.displayName = "HoverButton"

export { HoverButton }