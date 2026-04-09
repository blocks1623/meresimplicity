"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Building2, Globe, Bot, Code, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stages = [
  {
    id: 1,
    icon: Building2,
    title: "Legal Infrastructure",
    description: "Same-day CIPC & SARS Activation.",
  },
  {
    id: 2,
    icon: Globe,
    title: "Digital Foundation",
    description: "High-Performance Framer Architecture.",
  },
  {
    id: 3,
    icon: Bot,
    title: "Autonomous Branding",
    description: "AI-Generated Agentic Assets.",
  },
  {
    id: 4,
    icon: Code,
    title: "Python Logic Engine",
    description: "Custom n8n & Python Automations.",
  },
]

export function LogicMapSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStage, setActiveStage] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [particleProgress, setParticleProgress] = useState(0)
  const animationRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(0)

  // Animation loop for the particle
  useEffect(() => {
    const speed = isHovering ? 0.0012 : 0.0004
    
    const animate = (currentTime: number) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime
      }
      
      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime
      
      setParticleProgress((prev) => {
        const newProgress = prev + speed * deltaTime
        if (newProgress >= 1) {
          return 0
        }
        return newProgress
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovering])

  // Update active stage based on particle progress
  useEffect(() => {
    const stageIndex = Math.floor(particleProgress * 4)
    setActiveStage(Math.min(stageIndex, 3))
  }, [particleProgress])

  return (
    <section ref={ref} className="py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6"
          >
            System Architecture
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-normal text-foreground font-serif text-balance"
          >
            The 4 Stages of Business Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-muted-foreground max-w-xl mx-auto"
          >
            Watch how your business transforms as data flows through our engineered systems.
          </motion.p>
        </div>

        {/* Logic Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          {/* SVG Connection Lines - Desktop */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block"
            viewBox="0 0 1200 200"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(23, 23, 23)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="rgb(23, 23, 23)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="rgb(23, 23, 23)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            {/* Connection path */}
            <path
              id="flowPath"
              d="M 150 100 L 400 100 L 600 100 L 800 100 L 1050 100"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              className="opacity-30"
            />
            
            {/* Animated dash line */}
            <path
              d="M 150 100 L 400 100 L 600 100 L 800 100 L 1050 100"
              fill="none"
              stroke="rgb(23, 23, 23)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="8 12"
              className={`opacity-50 ${isHovering ? "animate-dash-fast" : "animate-dash"}`}
            />

            {/* Data Particle */}
            <motion.circle
              r="6"
              fill="rgb(23, 23, 23)"
              style={{
                offsetPath: `path("M 150 100 L 400 100 L 600 100 L 800 100 L 1050 100")`,
                offsetDistance: `${particleProgress * 100}%`,
              }}
            />
            
            {/* Particle trail */}
            <motion.circle
              r="4"
              fill="rgb(23, 23, 23)"
              opacity="0.3"
              style={{
                offsetPath: `path("M 150 100 L 400 100 L 600 100 L 800 100 L 1050 100")`,
                offsetDistance: `${Math.max(0, particleProgress * 100 - 3)}%`,
              }}
            />
          </svg>

          {/* Stage Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {stages.map((stage, index) => (
              <StageCard
                key={stage.id}
                stage={stage}
                isActive={activeStage === index}
                index={index}
                isHovering={isHovering}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-12"
            >
              <Link href="https://cal.com/bonny-cfb1wp" target="_blank" rel="noopener noreferrer">
                Run System Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Hover the button to accelerate the system simulation
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function StageCard({
  stage,
  isActive,
  index,
  isHovering,
  isInView,
}: {
  stage: typeof stages[0]
  isActive: boolean
  index: number
  isHovering: boolean
  isInView: boolean
}) {
  const Icon = stage.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className={`
        relative rounded-xl border bg-background p-6
        transition-all duration-300
        ${isActive ? "border-foreground shadow-sm" : "border-border"}
      `}
    >
      {/* Stage Number */}
      <div className={`
        absolute -top-3 -left-3 flex h-7 w-7 items-center justify-center rounded-full 
        text-xs font-semibold transition-all duration-300
        ${isActive 
          ? "bg-foreground text-background" 
          : "bg-muted text-muted-foreground border border-border"
        }
      `}>
        {stage.id}
      </div>

      {/* Icon */}
      <motion.div
        animate={isActive ? { 
          rotate: [0, -5, 5, 0],
          transition: { duration: isHovering ? 0.3 : 0.8, repeat: isActive ? Infinity : 0 }
        } : {}}
        className={`
          mb-4 flex h-12 w-12 items-center justify-center rounded-lg 
          transition-all duration-300
          ${isActive ? "bg-foreground/10" : "bg-muted"}
        `}
      >
        <Icon className={`h-6 w-6 transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground"}`} />
      </motion.div>

      {/* Content */}
      <h3 className={`mb-2 font-semibold transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
        {stage.title}
      </h3>
      <p className={`text-sm transition-colors duration-300 ${isActive ? "text-muted-foreground" : "text-muted-foreground/60"}`}>
        {stage.description}
      </p>

      {/* Active Indicator */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2"
          >
            <div className="flex items-center gap-1 rounded-full bg-foreground px-3 py-1">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: isHovering ? 0.3 : 0.8, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-background"
              />
              <span className="text-xs font-medium text-background">Processing</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
