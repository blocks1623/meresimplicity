import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What entrepreneurs are saying
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <TestimonialCard
            quote="Before Meresimplicity, getting my Pty Ltd registered felt like navigating a maze. Their CIPC integration had me operational in 48 hours with all compliance boxes ticked."
            name="Thabo M."
            role="Tech Startup Founder"
          />
          <TestimonialCard
            quote="The Python automations they built eliminated 20+ hours of manual work per week. My team now focuses on growth instead of repetitive admin tasks."
            name="Naledi K."
            role="E-commerce Business Owner"
          />
          <TestimonialCard
            quote="I needed a website that actually converts - not just looks pretty. Meresimplicity delivered a Framer site that increased my leads by 340% in the first month."
            name="Sipho D."
            role="Consulting Agency CEO"
          />
          <TestimonialCard
            quote="The AI branding package gave us a complete identity - logo, copy, everything - in days instead of weeks. And it actually captures our brand perfectly."
            name="Precious N."
            role="Creative Director"
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string
  name: string
  role: string
}) {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-8">
      <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
      <p className="mb-6 text-lg text-foreground">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
          <span className="text-lg font-bold text-primary">{name[0]}</span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}
