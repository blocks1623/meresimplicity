"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Globe, Lightbulb, Cog } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-[200px] w-[200px] rounded-full bg-primary/10 blur-[80px]" />
          </div>
          
          <div className="grid items-center gap-12 p-8 lg:grid-cols-2 lg:p-16">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                Start Your Assembly
              </p>
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to engineer your growth?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Book a consultation with our founder and discover how the Digital Assembly Line 
                can transform your raw business concept into an automated, scalable enterprise.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="https://cal.com/bonny-cfb1wp" target="_blank" rel="noopener noreferrer">
                      Book a Meeting
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
                    <Link href="#services">View Services</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
            
            <div className="rounded-2xl border border-border bg-background/50 p-6 backdrop-blur">
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
        </div>
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
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}
