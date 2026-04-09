"use client"

import { motion, useScroll, useTransform, useInView, useSpring, MotionValue } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Check } from "lucide-react"

const stages = [
  {
    stage: 1,
    icon: "legal",
    label: "CIPC BizPortal",
    sublabel: "Legal Infrastructure",
    description: "Same-day company registration with compliance-ready documentation.",
    checklist: ["Company Registration", "Tax Number", "Compliance Docs"],
    principle: "Waste Elimination",
    principleLabel: "Lean Systems"
  },
  {
    stage: 2,
    icon: "web",
    label: "Framer Architecture",
    sublabel: "Digital Presence",
    description: "Conversion-focused websites that turn visitors into customers.",
    checklist: ["Landing Pages", "CMS Integration", "Analytics Setup"],
    principle: "Optimized Throughput",
    principleLabel: "Work Study"
  },
  {
    stage: 3,
    icon: "ai",
    label: "AI Branding",
    sublabel: "Agentic Assets",
    description: "AI-generated brand assets that scale with your business.",
    checklist: ["Logo Design", "Brand Guidelines", "Visual Identity"],
    principle: "Creative Automation",
    principleLabel: "AI Integration"
  },
  {
    stage: 4,
    icon: "automation",
    label: "Python & n8n",
    sublabel: "Autonomous Ops",
    description: "Automated workflows that eliminate 93% of manual tasks.",
    checklist: ["Email Automation", "Data Processing", "API Integrations"],
    principle: "System Reliability",
    principleLabel: "Logical Troubleshooting"
  }
]

// Spring config matching Framer's recommended settings
const springConfig = {
  stiffness: 150,
  damping: 20,
  mass: 1
}

export function AssemblyAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Smooth spring-based scroll progress
  const smoothProgress = useSpring(scrollYProgress, springConfig)

  return (
    <section ref={containerRef} className="relative py-20 lg:py-32" id="process">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", ...springConfig }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", ...springConfig, delay: 0.1 }}
            className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4"
          >
            The Digital Assembly Line
          </motion.span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Four Stages to Business Excellence
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch your business infrastructure assemble itself, one stage at a time.
          </p>
        </motion.div>

        {/* Vertical Assembly Blocks */}
        <div className="relative">
          {/* Vertical connector line (static background) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2 hidden md:block" />
          
          {/* Animated progress line - draws as you scroll */}
          <motion.div 
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-primary via-primary to-primary/50 -translate-x-1/2 origin-top hidden md:block rounded-full"
            style={{ 
              scaleY: smoothProgress,
              height: "100%",
              boxShadow: "0 0 20px 4px rgba(134, 239, 172, 0.4)"
            }}
          />

          {/* Assembly Blocks */}
          <div className="relative flex flex-col gap-12">
            {stages.map((stage, index) => (
              <AssemblyBlock
                key={stage.stage}
                {...stage}
                index={index}
                totalStages={stages.length}
                scrollProgress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AssemblyBlock({
  stage,
  icon,
  label,
  sublabel,
  description,
  checklist,
  principle,
  principleLabel,
  index,
  totalStages,
  scrollProgress
}: {
  stage: number
  icon: string
  label: string
  sublabel: string
  description: string
  checklist: string[]
  principle: string
  principleLabel: string
  index: number
  totalStages: number
  scrollProgress: MotionValue<number>
}) {
  const blockRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(blockRef, { 
    margin: "-40% 0px -40% 0px", // Only "active" when in center 20% of viewport
    amount: 0.5 
  })
  
  const [hasBeenActive, setHasBeenActive] = useState(false)
  
  useEffect(() => {
    if (isInView) setHasBeenActive(true)
  }, [isInView])

  // Calculate this block's scroll range (each block gets 1/4 of the scroll)
  const blockStart = index / totalStages
  const blockEnd = (index + 1) / totalStages
  
  // Transform values based on block's position in scroll
  const blockProgress = useTransform(scrollProgress, [blockStart, blockEnd], [0, 1])
  
  // Slide in from left/right alternating
  const slideDirection = index % 2 === 0 ? -60 : 60
  const x = useTransform(blockProgress, [0, 0.3, 1], [slideDirection, 0, 0])
  const xSpring = useSpring(x, springConfig)
  
  // Scale up as it enters
  const scale = useTransform(blockProgress, [0, 0.4, 1], [0.85, 1, 1])
  const scaleSpring = useSpring(scale, springConfig)
  
  // Fade in
  const opacity = useTransform(blockProgress, [0, 0.3, 1], [0.3, 1, 1])
  const opacitySpring = useSpring(opacity, springConfig)
  
  // Rotate slightly on entrance
  const rotate = useTransform(blockProgress, [0, 0.4, 1], [index % 2 === 0 ? -3 : 3, 0, 0])
  const rotateSpring = useSpring(rotate, springConfig)

  return (
    <motion.div
      ref={blockRef}
      style={{ 
        x: xSpring,
        scale: scaleSpring, 
        opacity: opacitySpring,
        rotateZ: rotateSpring
      }}
      className="relative"
    >
      {/* Stage number - connector point */}
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 -top-6 z-10 hidden md:flex"
        animate={{
          scale: isInView ? 1.2 : 1,
          transition: { type: "spring", ...springConfig }
        }}
      >
        <motion.div 
          className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold"
          animate={{
            backgroundColor: isInView ? "rgb(34 197 94)" : "rgb(24 24 27)",
            borderColor: isInView ? "rgb(34 197 94)" : "rgb(63 63 70)",
            color: isInView ? "rgb(0 0 0)" : "rgb(161 161 170)",
            boxShadow: isInView 
              ? "0 0 30px 10px rgba(34, 197, 94, 0.5), 0 0 60px 20px rgba(34, 197, 94, 0.2)" 
              : "0 0 0px 0px rgba(34, 197, 94, 0)",
          }}
          transition={{ type: "spring", ...springConfig }}
        >
          {stage}
        </motion.div>
      </motion.div>

      {/* Main Block */}
      <motion.div
        className="relative rounded-2xl border bg-card p-6 lg:p-8 overflow-hidden"
        animate={{
          borderColor: isInView ? "rgba(34, 197, 94, 0.5)" : "rgba(63, 63, 70, 0.5)",
          boxShadow: isInView 
            ? "0 0 50px 15px rgba(34, 197, 94, 0.15), inset 0 1px 0 rgba(34, 197, 94, 0.1)" 
            : "0 0 0px 0px rgba(34, 197, 94, 0)",
        }}
        transition={{ type: "spring", ...springConfig }}
      >
        {/* Active state glow overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-2xl pointer-events-none"
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ type: "spring", ...springConfig }}
        />
        
        {/* Animated border glow */}
        <motion.div 
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{ 
            opacity: isInView ? 1 : 0,
            background: isInView 
              ? "linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.3), transparent)" 
              : "none"
          }}
          transition={{ type: "spring", ...springConfig }}
          style={{
            maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
            maskComposite: "xor",
            padding: "1px"
          }}
        />

        <div className="relative flex flex-col md:flex-row gap-6 items-start">
          {/* Icon */}
          <motion.div 
            className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-xl border"
            animate={{
              backgroundColor: isInView ? "rgba(34, 197, 94, 0.15)" : "rgba(34, 197, 94, 0.05)",
              borderColor: isInView ? "rgba(34, 197, 94, 0.4)" : "rgba(34, 197, 94, 0.1)",
              scale: isInView ? 1.05 : 1,
              rotate: isInView ? [0, 5, -5, 0] : 0
            }}
            transition={{ 
              type: "spring", 
              ...springConfig,
              rotate: { duration: 0.5, ease: "easeInOut" }
            }}
          >
            <StageIcon icon={icon} isActive={isInView} />
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <motion.span 
                className="inline-flex md:hidden h-6 w-6 items-center justify-center rounded-full text-xs font-bold"
                animate={{
                  backgroundColor: isInView ? "rgb(34 197 94)" : "rgb(63 63 70)",
                  color: isInView ? "rgb(0 0 0)" : "rgb(161 161 170)"
                }}
                transition={{ type: "spring", ...springConfig }}
              >
                {stage}
              </motion.span>
              <motion.h3 
                className="text-xl font-semibold"
                animate={{ color: isInView ? "rgb(255 255 255)" : "rgb(161 161 170)" }}
                transition={{ type: "spring", ...springConfig }}
              >
                {label}
              </motion.h3>
              <span className="text-sm text-muted-foreground">• {sublabel}</span>
            </div>
            <p className="text-muted-foreground mb-4">{description}</p>

            {/* Checklist items - staggered entrance with spring */}
            <div className="flex flex-wrap gap-2">
              {checklist.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.6, y: 15 }}
                  animate={hasBeenActive ? { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0 
                  } : {}}
                  transition={{ 
                    type: "spring", 
                    ...springConfig,
                    delay: 0.1 + (i * 0.1) // Staggered entrance
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  <motion.span
                    animate={{ 
                      scale: isInView ? [1, 1.3, 1] : 1,
                      rotate: isInView ? [0, 10, 0] : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                  >
                    <Check className="h-3 w-3" />
                  </motion.span>
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          {/* IE Principle Badge */}
          <motion.div 
            className="flex-shrink-0 text-right hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={hasBeenActive ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", ...springConfig, delay: 0.3 }}
          >
            <p className="text-xs text-muted-foreground mb-1">{principleLabel}</p>
            <motion.p 
              className="text-sm font-medium"
              animate={{ color: isInView ? "rgb(34 197 94)" : "rgb(161 161 170)" }}
              transition={{ type: "spring", ...springConfig }}
            >
              {principle}
            </motion.p>
          </motion.div>
        </div>
        
        {/* "Locked In" indicator */}
        <motion.div
          className="absolute top-4 right-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={hasBeenActive ? { 
            opacity: isInView ? 1 : 0.5, 
            scale: 1 
          } : {}}
          transition={{ type: "spring", ...springConfig, delay: 0.4 }}
        >
          <motion.div 
            className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full"
            animate={{
              backgroundColor: isInView ? "rgba(34, 197, 94, 0.2)" : "rgba(63, 63, 70, 0.3)",
              color: isInView ? "rgb(34 197 94)" : "rgb(113 113 122)"
            }}
            transition={{ type: "spring", ...springConfig }}
          >
            <motion.div 
              className="h-1.5 w-1.5 rounded-full"
              animate={{
                backgroundColor: isInView ? "rgb(34 197 94)" : "rgb(113 113 122)",
                boxShadow: isInView ? "0 0 8px 2px rgba(34, 197, 94, 0.6)" : "none"
              }}
              transition={{ type: "spring", ...springConfig }}
            />
            {isInView ? "Active" : "Ready"}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function StageIcon({ icon, isActive }: { icon: string; isActive: boolean }) {
  const iconClass = "h-8 w-8"
  
  const iconStyle = {
    color: isActive ? "rgb(34 197 94)" : "rgb(134 239 172)",
    filter: isActive ? "drop-shadow(0 0 8px rgba(34, 197, 94, 0.6))" : "none",
    transition: "all 0.3s ease"
  }
  
  switch (icon) {
    case "legal":
      return (
        <svg className={iconClass} style={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    case "web":
      return (
        <svg className={iconClass} style={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    case "ai":
      return (
        <svg className={iconClass} style={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    case "automation":
      return (
        <svg className={iconClass} style={iconStyle} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 5.373 2.683 5.373 5.366v2.195h6.627v.732H3.663C1.637 8.293 0 10.195 0 12.829s1.637 4.536 3.663 4.536h2.195v-3.22c0-2.024 1.756-3.664 3.78-3.664h6.363c1.756 0 3.18-1.463 3.18-3.22V5.366C19.18 3.293 17.707 0 12 0zm-3.22 3.22a1.464 1.464 0 110 2.927 1.464 1.464 0 010-2.927z"/>
          <path d="M12 24c6.627 0 6.627-2.683 6.627-5.366v-2.195h-6.627v-.732h8.337c2.024 0 3.663-1.902 3.663-4.536s-1.637-4.536-3.663-4.536h-2.195v3.22c0 2.024-1.756 3.664-3.78 3.664H8.001c-1.756 0-3.18 1.463-3.18 3.22v1.895c0 2.073 1.473 5.366 7.18 5.366zm3.22-3.22a1.464 1.464 0 110-2.927 1.464 1.464 0 010 2.927z"/>
        </svg>
      )
    default:
      return null
  }
}
