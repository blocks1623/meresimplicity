import { Button } from "@/components/ui/button"
import { ArrowRight, X, Check, Award, Code } from "lucide-react"

export function ComparisonSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1">
            <span className="text-sm font-medium text-foreground">Why engineering matters</span>
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The difference between designed and engineered
          </h2>
          <p className="text-lg text-muted-foreground">
            Most agencies design. We engineer. See how Industrial Engineering principles 
            transform business outcomes.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Without IE */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20">
                <X className="h-4 w-4 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Traditional Approach</h3>
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
          <div className="rounded-2xl border border-primary/50 bg-card p-8">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">The Meresimplicity Way</h3>
            </div>
            <ul className="space-y-4">
              <ComparisonItem label="Same-day CIPC registration & compliance" />
              <ComparisonItem label="Conversion-focused sales engines" />
              <ComparisonItem label="AI-generated brand assets that resonate" />
              <ComparisonItem label="93% reduction in manual tasks" />
              <ComparisonItem label="Fully integrated, automated systems" />
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Start your transformation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-muted-foreground">
            <Code className="h-4 w-4" />
            Python Certified
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-muted-foreground">
            <Award className="h-4 w-4" />
            IE Specialist
          </span>
        </div>
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
        <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
      ) : (
        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      )}
      <span className={negative ? "text-muted-foreground" : "text-foreground"}>{label}</span>
    </li>
  )
}
