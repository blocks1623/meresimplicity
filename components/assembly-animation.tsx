"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const videos = [
  {
    title: "How To Write Website Copy That SELLS",
    description: "I break down the most common copywriting mistakes, why writing about yourself is hurting your conversions, and how to write copy that makes people literally say \"take my money\".",
    image: "/images/video-1.jpg",
    link: "#"
  },
  {
    title: "3 Things You Need To Do Before Marketing your Business",
    description: "I break down the 3 things you must fix before marketing your business – identify the problem, build an offer around it, and show up where your customers actually are.",
    image: "/images/video-2.jpg",
    link: "#"
  },
  {
    title: "Ultimate Step By Step Guide To Making a Converting Landing Page!",
    description: "I break down exactly how high-converting landing pages work and walk you through a step-by-step framework you can use to turn visitors into paying customers.",
    image: "/images/video-3.jpg",
    link: "#"
  }
]

export function AssemblyAnimation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32" id="videos">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6"
          >
            Recent Videos
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-normal text-foreground font-serif text-balance"
          >
            Free Valuable Content To Help You Grow
          </motion.h2>
        </div>

        {/* Video Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link href={video.link} className="group block">
                {/* Video Thumbnail */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-4">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-6 w-6 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2 group-hover:underline">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {video.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-foreground">
                  CHECK IT OUT
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
