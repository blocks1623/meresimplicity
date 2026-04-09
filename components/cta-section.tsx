"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Globe, Lightbulb, Cog } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-background p-8 lg:p-16"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6">
                Start Your Assembly
              </span>
              <h2 className="mb-4 text-2xl sm:text-3xl font-normal text-foreground font-serif leading-tight">
                Ready to engineer your growth?
              </h2>
              <p className="mb-8 text-muted-foreground">
                Book a consultation with our founder and discover how the Digital Assembly Line 
                can transform your raw business concept into an automated, scalable enterprise.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
                  <Link href="https://cal.com/bonny-cfb1wp" target="_blank" rel="noopener noreferrer">
                    Book a Meeting
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-muted rounded-full px-8">
                  <Link href="#services">View Services</Link>
                </Button>
              </div>
            </div>
            
            <div className="rounded-xl border border-border bg-muted/50 p-6">
              <h3 className="mb-6 text-center text-sm font-medium text-muted-foreground">
                The Complete Digital Assembly Line
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <ServiceItem icon={Building2} label="CIPC & Compliance" />
                <ServiceItem icon={Globe} label="Framer Websites" />
                <ServiceItem icon={Lightbulb} label="AI Branding" />
                <ServiceItem icon={Cog} label="Python Automation" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceItem({ 
  icon: Icon, 
  label 
}: { 
  icon: React.ElementType
  label: string 
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center p-4 rounded-lg bg-background">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
        <Icon className="h-6 w-6 text-foreground" />
      </div>
      <span className="text-sm text-foreground">{label}</span>
    </div>
  )
}
