import { Layers, Wrench, Gauge } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Industrial Engineering Principles
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Engineering business systems that run themselves
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We apply IE pillars to ensure technical infrastructure is never a liability, but a scalable asset.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <PrincipleCard
            number={1}
            icon={Layers}
            title="Lean Systems"
            subtitle="Waste Elimination"
            description="We identify and eliminate every form of technical and operational waste - redundant processes, manual tasks, and inefficient workflows that drain your resources."
          />
          <PrincipleCard
            number={2}
            icon={Wrench}
            title="Work Study"
            subtitle="Optimized Throughput"
            description="Every system is analyzed and optimized for maximum throughput. We measure, refine, and automate until your operations run at peak efficiency."
          />
          <PrincipleCard
            number={3}
            icon={Gauge}
            title="Logical Troubleshooting"
            subtitle="System Reliability"
            description="Proactive monitoring and systematic problem-solving ensure your digital infrastructure stays reliable. Issues are caught before they become costly problems."
          />
        </div>
        
        {/* Brand Quote */}
        <div className="mt-16 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
          <blockquote className="text-xl font-medium text-foreground lg:text-2xl">
            &ldquo;A tech system that doesn&apos;t integrate is just expensive operational waste. 
            We engineer growth, we don&apos;t just design it.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">
            - Meresimplicity Brand Philosophy
          </p>
        </div>
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
}: {
  number: number
  icon: React.ElementType
  title: string
  subtitle: string
  description: string
}) {
  return (
    <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50">
      {/* Step number */}
      <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
        {number}
      </div>
      
      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-primary/20">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      
      <h3 className="mb-1 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mb-3 text-sm text-primary">{subtitle}</p>
      <p className="text-muted-foreground">{description}</p>
      
      {/* Connection line for desktop */}
      {number < 3 && (
        <div className="absolute top-1/2 -right-4 hidden h-0.5 w-8 bg-border md:block" />
      )}
    </div>
  )
}
