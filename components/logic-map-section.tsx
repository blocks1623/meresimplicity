"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, Globe, Bot, Code, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const springConfig = {
  stiffness: 150,
  damping: 20,
  mass: 1
}

const stages = [
  {
    id: 1,
    icon: Building2,
    title: "Legal Infrastructure",
    description: "Same-day CIPC & SARS Activation.",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/40",
  },
  {
    id: 2,
    icon: Globe,
    title: "Digital Foundation",
    description: "High-Performance Framer Architecture.",
    color: "from-cyan-500/20 to-cyan-500/5",
    borderColor: "border-cyan-500/30",
    glowColor: "shadow-cyan-500/40",
  },
  {
    id: 3,
    icon: Bot,
    title: "Autonomous Branding",
    description: "AI-Generated Agentic Assets.",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/40",
  },
  {
    id: 4,
    icon: Code,
    title: "Python Logic Engine",
    description: "Custom n8n & Python Automations.",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/30",
    glowColor: "shadow-amber-500/40",
  },
]

export function LogicMapSection() {
  const [activeStage, setActiveStage] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [particleProgress, setParticleProgress] = useState(0)
  const animationRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(0)

  // Animation loop for the particle
  useEffect(() => {
    const speed = isHovering ? 0.0012 : 0.0004 // 3x faster on hover
    
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
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", ...springConfig }}
            className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary"
          >
            Interactive System Architecture
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", ...springConfig, delay: 0.1 }}
            className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            The 4 Stages of Business Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", ...springConfig, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Watch how your business transforms as data flows through our engineered systems.
          </motion.p>
        </div>

        {/* Logic Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", ...springConfig }}
          className="relative"
        >
          {/* SVG Connection Lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1200 500"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="rgb(6, 182, 212)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="rgb(245, 158, 11)" stopOpacity="0.6" />
              </linearGradient>
              
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Connection path - flowing data lines */}
            <path
              id="flowPath"
              d="M 150 150 L 350 150 Q 400 150 400 200 L 400 300 Q 400 350 450 350 L 750 350 Q 800 350 800 300 L 800 200 Q 800 150 850 150 L 1050 150"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              className="opacity-20"
            />
            
            {/* Animated dash line */}
            <path
              d="M 150 150 L 350 150 Q 400 150 400 200 L 400 300 Q 400 350 450 350 L 750 350 Q 800 350 800 300 L 800 200 Q 800 150 850 150 L 1050 150"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="8 12"
              className={isHovering ? "animate-dash-fast" : "animate-dash"}
            />

            {/* Data Particle */}
            <motion.circle
              r="8"
              fill="rgb(16, 185, 129)"
              filter="url(#glow)"
              style={{
                offsetPath: `path("M 150 150 L 350 150 Q 400 150 400 200 L 400 300 Q 400 350 450 350 L 750 350 Q 800 350 800 300 L 800 200 Q 800 150 850 150 L 1050 150")`,
                offsetDistance: `${particleProgress * 100}%`,
              }}
            >
              <animate
                attributeName="opacity"
                values="1;0.6;1"
                dur={isHovering ? "0.3s" : "1s"}
                repeatCount="indefinite"
              />
            </motion.circle>
            
            {/* Particle trail */}
            <motion.circle
              r="4"
              fill="rgb(16, 185, 129)"
              opacity="0.4"
              style={{
                offsetPath: `path("M 150 150 L 350 150 Q 400 150 400 200 L 400 300 Q 400 350 450 350 L 750 350 Q 800 350 800 300 L 800 200 Q 800 150 850 150 L 1050 150")`,
                offsetDistance: `${Math.max(0, particleProgress * 100 - 3)}%`,
              }}
            />
            <motion.circle
              r="2"
              fill="rgb(16, 185, 129)"
              opacity="0.2"
              style={{
                offsetPath: `path("M 150 150 L 350 150 Q 400 150 400 200 L 400 300 Q 400 350 450 350 L 750 350 Q 800 350 800 300 L 800 200 Q 800 150 850 150 L 1050 150")`,
                offsetDistance: `${Math.max(0, particleProgress * 100 - 6)}%`,
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
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", ...springConfig, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.div
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", ...springConfig }}
          >
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold"
            >
              <Link href="https://cal.com/bonny-cfb1wp" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center gap-2">
                  Run System Audit
                  <motion.span
                    animate={isHovering ? { x: [0, 4, 0] } : {}}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </span>
                <AnimatePresence>
                  {isHovering && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-400 to-primary bg-[length:200%_100%] animate-shimmer"
                    />
                  )}
                </AnimatePresence>
              </Link>
            </Button>
          </motion.div>
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
}: {
  stage: typeof stages[0]
  isActive: boolean
  index: number
  isHovering: boolean
}) {
  const Icon = stage.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", ...springConfig, delay: index * 0.1 }}
      animate={{
        scale: isActive ? 1.05 : 1,
        opacity: isActive ? 1 : 0.7,
      }}
      className={`
        relative rounded-2xl border bg-gradient-to-b p-6
        transition-all duration-300
        ${stage.color}
        ${isActive ? `${stage.borderColor} shadow-lg ${stage.glowColor}` : "border-border/50"}
      `}
    >
      {/* Stage Number */}
      <div className={`
        absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full 
        text-sm font-bold transition-all duration-300
        ${isActive 
          ? "bg-primary text-primary-foreground scale-110" 
          : "bg-secondary text-muted-foreground"
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
          mb-4 flex h-14 w-14 items-center justify-center rounded-xl 
          transition-all duration-300
          ${isActive ? "bg-primary/30" : "bg-secondary/50"}
        `}
      >
        <Icon className={`h-7 w-7 transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
      </motion.div>

      {/* Content */}
      <h3 className={`mb-2 text-lg font-semibold transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
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
            transition={{ type: "spring", ...springConfig }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2"
          >
            <div className="flex items-center gap-1 rounded-full bg-primary px-3 py-1">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: isHovering ? 0.3 : 0.8, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-primary-foreground"
              />
              <span className="text-xs font-medium text-primary-foreground">Processing</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
