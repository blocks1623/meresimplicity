"use client"

import { Layers, Wrench, Gauge } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="process" className="py-20 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6"
          >
            Our Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-normal text-foreground font-serif text-balance mb-4"
          >
            Engineering business systems that run themselves
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We apply IE pillars to ensure technical infrastructure is never a liability, but a scalable asset.
          </motion.p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <PrincipleCard
            number={1}
            icon={Layers}
            title="Lean Systems"
            subtitle="Waste Elimination"
            description="We identify and eliminate every form of technical and operational waste - redundant processes, manual tasks, and inefficient workflows that drain your resources."
            isInView={isInView}
            delay={0}
          />
          <PrincipleCard
            number={2}
            icon={Wrench}
            title="Work Study"
            subtitle="Optimized Throughput"
            description="Every system is analyzed and optimized for maximum throughput. We measure, refine, and automate until your operations run at peak efficiency."
            isInView={isInView}
            delay={0.1}
          />
          <PrincipleCard
            number={3}
            icon={Gauge}
            title="Logical Troubleshooting"
            subtitle="System Reliability"
            description="Proactive monitoring and systematic problem-solving ensure your digital infrastructure stays reliable. Issues are caught before they become costly problems."
            isInView={isInView}
            delay={0.2}
          />
        </div>
        
        {/* Brand Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 rounded-xl border border-border bg-background p-8 text-center"
        >
          <blockquote className="text-xl font-normal text-foreground font-serif lg:text-2xl">
            &ldquo;A tech system that doesn&apos;t integrate is just expensive operational waste. 
            We engineer growth, we don&apos;t just design it.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">
            - Meresimplicity Brand Philosophy
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function PrincipleCard({
  number,
  icon: Icon,
  title,
  subtitle,
  description,
  isInView,
  delay,
}: {
  number: number
  icon: React.ElementType
  title: string
  subtitle: string
  description: string
  isInView: boolean
  delay: number
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + delay }}
      className="relative rounded-xl border border-border bg-background p-8"
    >
      {/* Step number */}
      <div className="absolute -top-3.5 left-8 flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
        {number}
      </div>
      
      {/* Icon */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
        <Icon className="h-6 w-6 text-foreground" />
      </div>
      
      <h3 className="mb-1 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-3 text-sm text-muted-foreground">{subtitle}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  )
}
