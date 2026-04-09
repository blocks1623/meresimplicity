"use client"

import { Button } from "@/components/ui/button"
import { Building2, Globe, Lightbulb, Cog, ArrowRight, Check, X, HelpCircle } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

// Compliance quiz questions
const complianceQuestions = [
  {
    id: "registered",
    question: "Do you have a registered company?",
    options: ["Yes, Pty Ltd", "Yes, Sole Proprietor", "No, not yet"]
  },
  {
    id: "taxNumber",
    question: "Do you have a Tax Number?",
    options: ["Yes", "No"]
  },
  {
    id: "vatRegistered",
    question: "Are you VAT registered?",
    options: ["Yes", "No", "Not sure if I need it"]
  },
  {
    id: "bbbee",
    question: "Do you have a B-BBEE certificate?",
    options: ["Yes", "No", "Don't know what this is"]
  }
]

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-6"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-normal text-foreground font-serif text-balance"
          >
            From raw concept to automated enterprise
          </motion.h2>
        </div>
        
        <div className="space-y-24">
          {/* Stage 1 - CIPC BizPortal */}
          <CIPCStage isInView={isInView} />
          
          {/* Stage 2 - Framer Architecture */}
          <FramerStage isInView={isInView} />
          
          {/* Stage 3 - AI Branding */}
          <AIBrandingStage isInView={isInView} />
          
          {/* Stage 4 - Python Automations */}
          <AutomationStage isInView={isInView} />
        </div>
      </div>
    </section>
  )
}

function CIPCStage({ isInView }: { isInView: boolean }) {
  const [showCalculator, setShowCalculator] = useState(false)
  const [quizStep, setQuizStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = { ...answers, [complianceQuestions[quizStep].id]: answer }
    setAnswers(newAnswers)
    
    if (quizStep < complianceQuestions.length - 1) {
      setQuizStep(quizStep + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setQuizStep(0)
    setAnswers({})
    setShowResults(false)
    setShowCalculator(false)
  }

  const getMissingSteps = () => {
    const missing: string[] = []
    if (answers.registered === "No, not yet") {
      missing.push("CIPC Name Reservation", "Company Registration")
    }
    if (answers.taxNumber === "No") {
      missing.push("SARS Tax Registration")
    }
    if (answers.bbbee !== "Yes") {
      missing.push("B-BBEE Certificate")
    }
    if (missing.length > 0) {
      missing.push("Bank Account Setup")
    }
    return missing
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="grid items-center gap-12 lg:grid-cols-2"
    >
      <div className="order-2 lg:order-1">
        <div className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-4">
          <Building2 className="h-4 w-4 mr-2" />
          Stage 1: Legal Infrastructure
        </div>
        <h3 className="mb-4 text-2xl font-normal text-foreground font-serif sm:text-3xl">
          CIPC BizPortal Integration
        </h3>
        <p className="mb-6 text-muted-foreground">
          We secure your legal infrastructure through direct CIPC integration, 
          facilitating same-day Pty Ltd registrations, SARS tax compliance, and B-BBEE certification.
        </p>
        <ul className="mb-8 space-y-3">
          <ChecklistItem>Same-day Pty Ltd registration</ChecklistItem>
          <ChecklistItem>SARS eFiling compliance setup</ChecklistItem>
          <ChecklistItem>B-BBEE certification assistance</ChecklistItem>
        </ul>
        <Button 
          onClick={() => setShowCalculator(true)}
          className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
        >
          Get compliant today
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      {/* Progress Tracker */}
      <div className="order-1 lg:order-2">
        <div className="rounded-xl border border-border bg-background p-6">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="font-semibold text-foreground">Progress Tracker</h4>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <HelpCircle className="h-3 w-3" />
              Interactive
            </span>
          </div>
          <div className="space-y-3">
            <WorkflowItem label="CIPC Name Reservation" status="completed" />
            <WorkflowItem label="Company Registration" status="active" active />
            <WorkflowItem label="SARS Tax Registration" status="pending" />
            <WorkflowItem label="B-BBEE Certificate" status="pending" />
            <WorkflowItem label="Bank Account Setup" status="pending" />
          </div>
        </div>
      </div>

      {/* Compliance Calculator Modal */}
      <AnimatePresence>
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm p-4"
            onClick={() => resetQuiz()}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Compliance Calculator</h3>
                <button onClick={() => resetQuiz()} className="text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {!showResults ? (
                <>
                  <div className="mb-4">
                    <div className="flex gap-1 mb-4">
                      {complianceQuestions.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1 flex-1 rounded-full ${i <= quizStep ? 'bg-foreground' : 'bg-border'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Question {quizStep + 1} of {complianceQuestions.length}
                    </p>
                    <h4 className="text-lg font-medium text-foreground">
                      {complianceQuestions[quizStep].question}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {complianceQuestions[quizStep].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleQuizAnswer(option)}
                        className="w-full text-left p-3 rounded-lg border border-border bg-background hover:border-foreground transition-all text-foreground"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-foreground mb-2">Your Compliance Audit</h4>
                    <p className="text-sm text-muted-foreground">
                      Based on your answers, here are the steps you need:
                    </p>
                  </div>
                  <div className="space-y-2 mb-6">
                    {getMissingSteps().length > 0 ? (
                      getMissingSteps().map((step) => (
                        <div key={step} className="flex items-center gap-2 p-3 rounded-lg border border-border">
                          <ArrowRight className="h-4 w-4 text-foreground" />
                          <span className="text-sm text-foreground">{step}</span>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 rounded-lg border border-border text-center">
                        <Check className="h-8 w-8 text-foreground mx-auto mb-2" />
                        <p className="text-foreground font-medium">You&apos;re fully compliant!</p>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => resetQuiz()} className="flex-1 rounded-full">
                      Retake
                    </Button>
                    <Button asChild className="flex-1 bg-foreground text-background rounded-full">
                      <Link href="https://cal.com/bonny-cfb1wp" target="_blank" rel="noopener noreferrer">
                        Book a Meeting
                      </Link>
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function WorkflowItem({ 
  label, 
  status, 
  active = false
}: { 
  label: string
  status: "completed" | "active" | "pending"
  active?: boolean 
}) {
  return (
    <div 
      className={`flex items-center gap-3 rounded-lg border p-3 ${
        active 
          ? "border-foreground bg-foreground/5" 
          : "border-border"
      }`}
    >
      <div 
        className={`flex h-8 w-8 items-center justify-center rounded-full ${
          status === "completed" 
            ? "bg-foreground text-background" 
            : status === "active" 
              ? "bg-foreground/20 text-foreground" 
              : "bg-muted text-muted-foreground"
        }`}
      >
        {status === "completed" && <Check className="h-4 w-4" />}
        {status === "active" && <ArrowRight className="h-4 w-4" />}
        {status === "pending" && <span className="text-xs">...</span>}
      </div>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  )
}

function FramerStage({ isInView }: { isInView: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="grid items-center gap-12 lg:grid-cols-2"
    >
      <div>
        <div className="rounded-xl border border-border bg-background p-6">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="font-semibold text-foreground">Framer Architecture</h4>
            <span className="text-xs text-muted-foreground">Conversion-Focused</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Conversion Rate" value="+47%" />
            <StatCard label="Load Time" value="0.8s" />
            <StatCard label="Mobile Score" value="100" />
            <StatCard label="SEO Ready" value="Yes" />
          </div>
        </div>
      </div>
      <div>
        <div className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-4">
          <Globe className="h-4 w-4 mr-2" />
          Stage 2: Digital Architecture
        </div>
        <h3 className="mb-4 text-2xl font-normal text-foreground font-serif sm:text-3xl">
          High-Converting Framer Websites
        </h3>
        <p className="mb-6 text-muted-foreground">
          We build high-performance, high-converting websites on Framer that act as 
          reliable sales engines - not just pretty pages.
        </p>
        <ul className="mb-8 space-y-3">
          <ChecklistItem>Conversion-focused architecture</ChecklistItem>
          <ChecklistItem>Mobile-first responsive design</ChecklistItem>
          <ChecklistItem>SEO & performance optimized</ChecklistItem>
        </ul>
        <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
          <Link href="https://cal.com/bonny-cfb1wp" target="_blank" rel="noopener noreferrer">
            Build your sales engine
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}

function AIBrandingStage({ isInView }: { isInView: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid items-center gap-12 lg:grid-cols-2"
    >
      <div className="order-2 lg:order-1">
        <div className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-4">
          <Lightbulb className="h-4 w-4 mr-2" />
          Stage 3: Agentic AI Branding
        </div>
        <h3 className="mb-4 text-2xl font-normal text-foreground font-serif sm:text-3xl">
          Autonomous Brand Assets
        </h3>
        <p className="mb-6 text-muted-foreground">
          We deploy Agentic AI to generate autonomous assets - logos, professional 
          copywriting, and digital spokespeople that work 24/7.
        </p>
        <ul className="mb-8 space-y-3">
          <ChecklistItem>AI-generated logo systems</ChecklistItem>
          <ChecklistItem>Professional copywriting</ChecklistItem>
          <ChecklistItem>Digital spokesperson avatars</ChecklistItem>
        </ul>
        <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
          <Link href="https://cal.com/bonny-cfb1wp" target="_blank" rel="noopener noreferrer">
            Generate your brand
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="order-1 lg:order-2">
        <div className="rounded-xl border border-border bg-background p-6">
          <div className="grid grid-cols-2 gap-4">
            <BrandAssetCard name="Logo System" type="AI Generated" />
            <BrandAssetCard name="Brand Voice" type="Copywriting" />
            <BrandAssetCard name="Spokesperson" type="Digital Avatar" />
            <BrandAssetCard name="Social Kit" type="Templates" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function AutomationStage({ isInView }: { isInView: boolean }) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const automationSteps = [
    "Initializing Python runtime...",
    "Connecting to n8n workflows...",
    "Processing order queue...",
    "Generating invoices...",
    "Syncing customer data...",
    "Automation complete!"
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isProcessing) {
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= automationSteps.length - 1) {
            setIsProcessing(false)
            return 0
          }
          return prev + 1
        })
      }, 1500)
    }
    return () => clearInterval(interval)
  }, [isProcessing, automationSteps.length])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid items-center gap-12 lg:grid-cols-2"
    >
      <div>
        <div className="rounded-xl border border-border bg-background p-6">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="font-semibold text-foreground">Automation Dashboard</h4>
            <span className={`rounded-full px-2 py-0.5 text-xs ${isProcessing ? "bg-foreground/10 text-foreground" : "bg-muted text-muted-foreground"}`}>
              {isProcessing ? "Processing" : "Ready"}
            </span>
          </div>
          <div className="space-y-3">
            <AutomationItem label="Order Processing" status={isProcessing && currentStep >= 2 ? "running" : "ready"} />
            <AutomationItem label="Invoice Generation" status={isProcessing && currentStep >= 3 ? "running" : "ready"} />
            <AutomationItem label="Customer Onboarding" status={isProcessing && currentStep >= 4 ? "running" : "ready"} />
            <AutomationItem label="Report Generation" status="scheduled" />
          </div>
          
          <div className="mt-4 rounded-lg bg-muted p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Manual Tasks Eliminated</span>
              <span className="text-xl font-bold text-foreground">93%</span>
            </div>
            
            <button
              onClick={() => {
                setCurrentStep(0)
                setIsProcessing(true)
              }}
              disabled={isProcessing}
              className="mt-3 w-full text-center text-sm font-medium text-foreground hover:underline disabled:opacity-50"
            >
              {isProcessing ? "Simulating..." : "Run Simulation"}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground mb-4">
          <Cog className="h-4 w-4 mr-2" />
          Stage 4: Autonomous Operations
        </div>
        <h3 className="mb-4 text-2xl font-normal text-foreground font-serif sm:text-3xl">
          Python & n8n Automations
        </h3>
        <p className="mb-6 text-muted-foreground">
          We integrate Autonomous Business Automations using Python and n8n to eliminate 
          manual friction and handle operations on autopilot.
        </p>
        <ul className="mb-8 space-y-3">
          <ChecklistItem>Order processing on autopilot</ChecklistItem>
          <ChecklistItem>Automated invoicing & follow-ups</ChecklistItem>
          <ChecklistItem>AWS cloud infrastructure</ChecklistItem>
        </ul>
        <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
          <Link href="https://cal.com/bonny-cfb1wp" target="_blank" rel="noopener noreferrer">
            Automate your operations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border mt-0.5">
        <Check className="h-3.5 w-3.5 text-foreground" />
      </div>
      <span className="text-foreground">{children}</span>
    </li>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-muted p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-xl font-bold text-foreground">{value}</p>
    </div>
  )
}

function BrandAssetCard({ name, type }: { name: string; type: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-muted p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background">
        <Lightbulb className="h-6 w-6 text-foreground" />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs text-muted-foreground">{type}</span>
    </div>
  )
}

function AutomationItem({ label, status }: { label: string; status: "running" | "ready" | "scheduled" }) {
  return (
    <div className={`flex items-center justify-between rounded-lg border p-3 ${
      status === "running" ? "border-foreground bg-foreground/5" : "border-border"
    }`}>
      <div className="flex items-center gap-3">
        <div className={`h-2 w-2 rounded-full ${
          status === "running" ? "bg-foreground animate-pulse" : 
          status === "ready" ? "bg-muted-foreground" : "bg-muted-foreground/50"
        }`} />
        <span className="text-sm font-medium text-foreground">{label}</span>
      </div>
      <span className={`text-xs ${
        status === "running" ? "text-foreground" : "text-muted-foreground"
      }`}>
        {status === "running" ? "Running" : status === "ready" ? "Ready" : "Scheduled"}
      </span>
    </div>
  )
}
