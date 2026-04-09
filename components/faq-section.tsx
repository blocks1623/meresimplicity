"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What exactly is the Digital Assembly Line?",
    answer: "The Digital Assembly Line is our four-stage process that takes businesses from raw concept to automated enterprise: Stage 1 (Legal Infrastructure via CIPC), Stage 2 (Digital Architecture via Framer), Stage 3 (AI Branding), and Stage 4 (Python & n8n Automation). Each stage is engineered using Industrial Engineering principles for maximum efficiency.",
  },
  {
    question: "How quickly can you register my Pty Ltd?",
    answer: "Through our direct CIPC BizPortal integration, we can facilitate same-day Pty Ltd registrations. This includes name reservation, company registration, and initial SARS tax compliance setup. Full operational compliance is typically achieved within 48-72 hours.",
  },
  {
    question: "What makes your Framer websites different?",
    answer: "We don't just build pretty websites - we engineer conversion-focused sales engines. Our sites feature -3% letter-spacing typography, bento-box UI patterns, mobile-first design, and are optimized for 95+ PageSpeed scores. Every element is designed to convert visitors into customers.",
  },
  {
    question: "What kind of automations can you build?",
    answer: "Using Python and n8n, we can automate virtually any repetitive business process: order processing, invoice generation, customer onboarding, email sequences, report generation, data syncing between platforms, and more. Our clients typically eliminate 90%+ of manual administrative tasks.",
  },
  {
    question: "Who is behind Meresimplicity?",
    answer: "Meresimplicity was founded by Modipa Kgothatso Bonny, an Industrial Engineering specialist and Python-certified developer. The firm operates on the principle that a business is a high-output machine that must be engineered for maximum efficiency and zero technical waste.",
  },
  {
    question: "Do I need all four stages?",
    answer: "Not necessarily. While the full Digital Assembly Line delivers the most comprehensive transformation, each stage can be implemented independently based on your current needs. Many clients start with one stage and add others as they scale.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Frequently asked questions
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Common questions answered
          </h2>
        </div>
        
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
