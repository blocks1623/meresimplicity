"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Building2, Globe, Bot, Code, Play, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

const stages = [
  {
    id: 1,
    icon: Building2,
    title: "CIPC_LEGAL",
    subtitle: "Legal Infrastructure",
    description: "Same-day CIPC & SARS Activation.",
    status: "READY",
  },
  {
    id: 2,
    icon: Globe,
    title: "FRAMER_WEB",
    subtitle: "Digital Foundation",
    description: "High-Performance Framer Architecture.",
    status: "STANDBY",
  },
  {
    id: 3,
    icon: Bot,
    title: "AI_BRANDING",
    subtitle: "Autonomous Branding",
    description: "AI-Generated Agentic Assets.",
    status: "STANDBY",
  },
  {
    id: 4,
    icon: Code,
    title: "PYTHON_ENGINE",
    subtitle: "Logic Engine",
    description: "Custom n8n & Python Automations.",
    status: "STANDBY",
  },
]

export function LogicMapSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStage, setActiveStage] = useState(-1)
  const [isRunning, setIsRunning] = useState(false)
  const [testComplete, setTestComplete] = useState(false)
  const [lineProgress, setLineProgress] = useState([0, 0, 0])
  const [flickerStage, setFlickerStage] = useState(-1)

  // Power-on sequence triggered by scroll
  useEffect(() => {
    if (isInView && activeStage === -1 && !isRunning) {
      // Start the initial power-on sequence
      const timeout = setTimeout(() => {
        setActiveStage(0)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [isInView, activeStage, isRunning])

  const runThroughputTest = useCallback(() => {
    if (isRunning) return
    
    setIsRunning(true)
    setTestComplete(false)
    setActiveStage(0)
    setLineProgress([0, 0, 0])

    // Stage 1 lights up immediately
    setTimeout(() => {
      // Draw line 1 with electricity effect
      setLineProgress([100, 0, 0])
      
      setTimeout(() => {
        // Flicker effect on Stage 2
        setFlickerStage(1)
        setTimeout(() => {
          setFlickerStage(-1)
          setActiveStage(1)
          
          // Draw line 2
          setTimeout(() => {
            setLineProgress([100, 100, 0])
            
            setTimeout(() => {
              // Flicker effect on Stage 3
              setFlickerStage(2)
              setTimeout(() => {
                setFlickerStage(-1)
                setActiveStage(2)
                
                // Draw line 3
                setTimeout(() => {
                  setLineProgress([100, 100, 100])
                  
                  setTimeout(() => {
                    // Flicker effect on Stage 4
                    setFlickerStage(3)
                    setTimeout(() => {
                      setFlickerStage(-1)
                      setActiveStage(3)
                      
                      // Test complete
                      setTimeout(() => {
                        setTestComplete(true)
                        setIsRunning(false)
                        
                        // Scroll to testimonials
                        const testimonialsSection = document.getElementById('testimonials')
                        if (testimonialsSection) {
                          testimonialsSection.scrollIntoView({ behavior: 'smooth' })
                        }
                      }, 400)
                    }, 100)
                  }, 50)
                }, 200)
              }, 100)
            }, 50)
          }, 200)
        }, 100)
      }, 50)
    }, 200)
  }, [isRunning])

  return (
    <section ref={ref} className="py-20 lg:py-32 overflow-hidden bg-[#0f1419] relative">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(transparent 50%, rgba(34, 197, 94, 0.02) 50%)',
          backgroundSize: '100% 4px',
        }}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 px-4 py-1.5 text-sm text-[#22C55E] font-mono mb-6"
          >
            <Terminal className="h-3 w-3" />
            SYSTEM_ARCHITECTURE v2.0
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-normal text-white font-serif text-balance"
          >
            Automated Workflow Engine
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-xl mx-auto font-mono text-sm"
          >
            {`// Playable simulation of your business infrastructure`}
          </motion.p>
        </div>

        {/* Schematic Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          {/* SVG Power Lines - Desktop */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block"
            viewBox="0 0 1200 280"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="powerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22C55E" stopOpacity="0" />
                <stop offset="50%" stopColor="#22C55E" stopOpacity="1" />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Base connection lines (dim) */}
            <path
              d="M 200 140 L 400 140"
              fill="none"
              stroke="#22C55E"
              strokeWidth="2"
              strokeOpacity="0.2"
              strokeDasharray="8 8"
            />
            <path
              d="M 500 140 L 700 140"
              fill="none"
              stroke="#22C55E"
              strokeWidth="2"
              strokeOpacity="0.2"
              strokeDasharray="8 8"
            />
            <path
              d="M 800 140 L 1000 140"
              fill="none"
              stroke="#22C55E"
              strokeWidth="2"
              strokeOpacity="0.2"
              strokeDasharray="8 8"
            />

            {/* Animated power lines */}
            <motion.path
              d="M 200 140 L 400 140"
              fill="none"
              stroke="#22C55E"
              strokeWidth="3"
              filter="url(#glow)"
              strokeDasharray="200"
              initial={{ strokeDashoffset: 200 }}
              animate={{ strokeDashoffset: 200 - (lineProgress[0] * 2) }}
              transition={{ duration: 0.2, ease: "linear" }}
            />
            <motion.path
              d="M 500 140 L 700 140"
              fill="none"
              stroke="#22C55E"
              strokeWidth="3"
              filter="url(#glow)"
              strokeDasharray="200"
              initial={{ strokeDashoffset: 200 }}
              animate={{ strokeDashoffset: 200 - (lineProgress[1] * 2) }}
              transition={{ duration: 0.2, ease: "linear" }}
            />
            <motion.path
              d="M 800 140 L 1000 140"
              fill="none"
              stroke="#22C55E"
              strokeWidth="3"
              filter="url(#glow)"
              strokeDasharray="200"
              initial={{ strokeDashoffset: 200 }}
              animate={{ strokeDashoffset: 200 - (lineProgress[2] * 2) }}
              transition={{ duration: 0.2, ease: "linear" }}
            />

            {/* Racing light particles when running */}
            {isRunning && lineProgress[0] > 0 && lineProgress[0] < 100 && (
              <motion.circle
                r="6"
                fill="#22C55E"
                filter="url(#glow)"
                initial={{ cx: 200, cy: 140 }}
                animate={{ cx: 400, cy: 140 }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            )}
            {isRunning && lineProgress[1] > 0 && lineProgress[1] < 100 && (
              <motion.circle
                r="6"
                fill="#22C55E"
                filter="url(#glow)"
                initial={{ cx: 500, cy: 140 }}
                animate={{ cx: 700, cy: 140 }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            )}
            {isRunning && lineProgress[2] > 0 && lineProgress[2] < 100 && (
              <motion.circle
                r="6"
                fill="#22C55E"
                filter="url(#glow)"
                initial={{ cx: 800, cy: 140 }}
                animate={{ cx: 1000, cy: 140 }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            )}
          </svg>

          {/* Terminal Windows Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {stages.map((stage, index) => (
              <TerminalWindow
                key={stage.id}
                stage={stage}
                isActive={activeStage >= index}
                isFlickering={flickerStage === index}
                index={index}
                isInView={isInView}
                testComplete={testComplete && index === 3}
              />
            ))}
          </div>

          {/* Mobile Connection Lines */}
          <div className="lg:hidden flex flex-col items-center -my-3 relative z-0">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-0.5 h-6 my-3"
                style={{
                  background: lineProgress[i] > 0 
                    ? 'linear-gradient(to bottom, #22C55E, #22C55E)' 
                    : 'linear-gradient(to bottom, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.2))',
                  boxShadow: lineProgress[i] > 0 ? '0 0 10px #22C55E' : 'none',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Run Throughput Test Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Button
            onClick={runThroughputTest}
            disabled={isRunning}
            size="lg"
            className="bg-[#22C55E] text-black hover:bg-[#22C55E]/90 rounded-md px-8 h-12 font-mono font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="mr-2 h-4 w-4" />
            {isRunning ? "RUNNING TEST..." : "Run Throughput Test"}
          </Button>
          <p className="mt-4 text-sm text-gray-500 font-mono">
            {testComplete 
              ? "// Test complete. Output generated in Reviews section." 
              : "// Click to simulate full system throughput"
            }
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function TerminalWindow({
  stage,
  isActive,
  isFlickering,
  index,
  isInView,
  testComplete,
}: {
  stage: typeof stages[0]
  isActive: boolean
  isFlickering: boolean
  index: number
  isInView: boolean
  testComplete: boolean
}) {
  const Icon = stage.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { 
        opacity: isFlickering ? [0.3, 1, 0.3, 1] : 1, 
        y: 0,
        scale: isActive ? 1 : 0.98,
      } : {}}
      transition={{ 
        duration: isFlickering ? 0.1 : 0.5, 
        delay: isFlickering ? 0 : 0.3 + index * 0.1,
        type: isActive ? "spring" : "tween",
        stiffness: 300,
        damping: 20,
      }}
      className={`
        relative rounded-lg overflow-hidden
        transition-all duration-300
        ${isActive 
          ? "bg-[#1a1f26] border-2 border-[#22C55E] shadow-[0_0_30px_rgba(34,197,94,0.3)]" 
          : "bg-[#141920] border border-[#22C55E]/20"
        }
      `}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#0d1117] border-b border-[#22C55E]/20">
        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${isActive ? "bg-[#22C55E] shadow-[0_0_6px_#22C55E]" : "bg-gray-600"}`} />
          <div className={`h-2 w-2 rounded-full ${isActive ? "bg-yellow-500" : "bg-gray-600"}`} />
          <div className={`h-2 w-2 rounded-full ${isActive ? "bg-red-500" : "bg-gray-600"}`} />
        </div>
        <span className="text-[10px] font-mono text-gray-500">
          {stage.title}.exe
        </span>
      </div>

      {/* Terminal Content */}
      <div className="p-4">
        {/* Icon with glow */}
        <motion.div
          animate={isActive ? { 
            boxShadow: ["0 0 0px rgba(34,197,94,0)", "0 0 20px rgba(34,197,94,0.5)", "0 0 0px rgba(34,197,94,0)"],
          } : {}}
          transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
          className={`
            mb-4 flex h-12 w-12 items-center justify-center rounded-md 
            transition-all duration-300
            ${isActive ? "bg-[#22C55E]/20 border border-[#22C55E]/50" : "bg-[#22C55E]/5 border border-[#22C55E]/10"}
          `}
        >
          <Icon className={`h-6 w-6 transition-colors duration-300 ${isActive ? "text-[#22C55E]" : "text-gray-600"}`} />
        </motion.div>

        {/* Stage Info */}
        <h3 className={`mb-1 font-mono text-sm font-semibold transition-colors duration-300 ${isActive ? "text-[#22C55E]" : "text-gray-500"}`}>
          {stage.subtitle}
        </h3>
        <p className={`text-xs font-mono transition-colors duration-300 ${isActive ? "text-gray-400" : "text-gray-600"}`}>
          {stage.description}
        </p>

        {/* Status Line */}
        <div className="mt-4 pt-3 border-t border-[#22C55E]/10">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-gray-500">STATUS:</span>
            <span className={`text-[10px] font-mono ${isActive ? "text-[#22C55E]" : "text-gray-600"}`}>
              {isActive ? "ONLINE" : "STANDBY"}
            </span>
          </div>
          {isActive && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
              className="h-0.5 bg-[#22C55E] mt-2 rounded-full shadow-[0_0_6px_#22C55E]"
            />
          )}
        </div>

        {/* Output indicator for last stage */}
        <AnimatePresence>
          {testComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3 p-2 rounded bg-[#22C55E]/10 border border-[#22C55E]/30"
            >
              <p className="text-[10px] font-mono text-[#22C55E]">
                {`> OUTPUT: See Reviews Section`}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
