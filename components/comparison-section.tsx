"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, X, Check } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export function ComparisonSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-normal text-foreground font-serif leading-tight mb-6">
              A website that doesn&apos;t convert is just an expensive business card
            </h2>
            <p className="text-muted-foreground mb-8">
              You are most probably investing thousands of dollars into your marketing efforts and driving traffic to your website (or you plan to), all to have your website not properly optimized to convert that traffic into buyers. Your website is likely leaking revenue and sales. There&apos;s nothing more frustrating than driving traffic to your website to have it convert at low, average numbers or not at all.
            </p>
            <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
              <Link href="https://cal.com/bonny-cfb1wp" target="_blank" rel="noopener noreferrer">
                Book A Free Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted"
          >
            <Image
              src="/images/conversion.jpg"
              alt="Website conversion optimization"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Comparison Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-24 grid gap-8 lg:grid-cols-2"
        >
          {/* Without IE */}
          <div className="rounded-xl border border-border bg-background p-8">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border">
                <X className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Traditional Approach</h3>
            </div>
            <ul className="space-y-4">
              <ComparisonItem negative label="Weeks of back-and-forth on compliance" />
              <ComparisonItem negative label="Pretty websites that don't convert" />
              <ComparisonItem negative label="Generic branding that doesn't stand out" />
              <ComparisonItem negative label="Manual processes that drain your time" />
              <ComparisonItem negative label="Disconnected systems that don't talk" />
            </ul>
          </div>
          
          {/* With IE */}
          <div className="rounded-xl border border-foreground bg-background p-8">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                <Check className="h-4 w-4 text-background" />
              </div>
              <h3 className="font-semibold text-foreground">The Meresimplicity Way</h3>
            </div>
            <ul className="space-y-4">
              <ComparisonItem label="Same-day CIPC registration & compliance" />
              <ComparisonItem label="Conversion-focused sales engines" />
              <ComparisonItem label="AI-generated brand assets that resonate" />
              <ComparisonItem label="93% reduction in manual tasks" />
              <ComparisonItem label="Fully integrated, automated systems" />
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ComparisonItem({ 
  label, 
  negative = false 
}: { 
  label: string
  negative?: boolean 
}) {
  return (
    <li className="flex items-start gap-3">
      {negative ? (
        <X className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
      ) : (
        <Check className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
      )}
      <span className={negative ? "text-muted-foreground" : "text-foreground"}>{label}</span>
    </li>
  )
}
