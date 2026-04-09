"use client"

import { Button } from "@/components/ui/button"
import { Building2, Globe, Lightbulb, Cog, ArrowRight, Check, X, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

const springConfig = {
  stiffness: 150,
  damping: 20,
  mass: 1
}

// Technical details for each CIPC step
const cipcStepDetails: Record<string, { title: string; detail: string; iePrinciple: string }> = {
  "CIPC Name Reservation": {
    title: "Name Availability Check",
    detail: "We use direct API integration to check name availability in < 2 seconds. Our system queries the CIPC database in real-time.",
    iePrinciple: "Work Study: Eliminating manual name search delays"
  },
  "Company Registration": {
    title: "Pty Ltd Registration",
    detail: "Automated form population and submission via secure BizPortal connection. Average processing: 4 hours vs industry standard 5-7 days.",
    iePrinciple: "Lean Systems: 93% reduction in registration time"
  },
  "SARS Tax Registration": {
    title: "Tax Compliance Setup",
    detail: "Automated SARS eFiling registration with Income Tax, VAT, and PAYE setup. Zero-friction tax compliance from day one.",
    iePrinciple: "Waste Elimination: No manual SARS visits required"
  },
  "B-BBEE Certificate": {
    title: "B-BBEE Certification",
    detail: "Automated B-BBEE affidavit generation and certification assistance. Procurement-ready documentation.",
    iePrinciple: "Logical Troubleshooting: Compliance pathways automated"
  },
  "Bank Account Setup": {
    title: "Business Banking",
    detail: "Pre-filled application templates for major SA banks. Digital submission ready with all required documentation.",
    iePrinciple: "Optimized Throughput: Banking setup in parallel"
  }
}

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
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", ...springConfig }}
            className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary"
          >
            The Four-Stage Digital Assembly Line
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", ...springConfig, delay: 0.1 }}
            className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            From raw concept to automated enterprise
          </motion.h2>
        </div>
        
        <div className="space-y-24">
          {/* Stage 1 - CIPC BizPortal with Interactive Progress Tracker */}
          <CIPCStage />
          
          {/* Stage 2 - Framer Architecture */}
          <FramerStage />
          
          {/* Stage 3 - AI Branding */}
          <AIBrandingStage />
          
          {/* Stage 4 - Python Automations with Live Status Simulation */}
          <AutomationStage />
        </div>
      </div>
    </section>
  )
}

function CIPCStage() {
  const [selectedStep, setSelectedStep] = useState<string | null>(null)
  const [showCalculator, setShowCalculator] = useState(false)
  const [quizStep, setQuizStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleStepClick = (label: string) => {
    setSelectedStep(selectedStep === label ? null : label)
  }

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

  // Determine which steps are needed based on answers
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", ...springConfig }}
      className="grid items-center gap-12 lg:grid-cols-2"
    >
      <div className="order-2 lg:order-1">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1">
          <Building2 className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Stage 1: Legal Infrastructure</span>
        </div>
        <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
          CIPC BizPortal Integration
        </h3>
        <p className="mb-6 text-lg text-muted-foreground">
          We secure your legal infrastructure through direct CIPC integration, 
          facilitating same-day Pty Ltd registrations, SARS tax compliance, and B-BBEE certification.
        </p>
        <ul className="mb-8 space-y-3">
          <li className="flex items-center gap-3 text-muted-foreground">
            <Check className="h-5 w-5 text-primary" />
            Same-day Pty Ltd registration
          </li>
          <li className="flex items-center gap-3 text-muted-foreground">
            <Check className="h-5 w-5 text-primary" />
            SARS eFiling compliance setup
          </li>
          <li className="flex items-center gap-3 text-muted-foreground">
            <Check className="h-5 w-5 text-primary" />
            B-BBEE certification assistance
          </li>
        </ul>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button 
            onClick={() => setShowCalculator(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get compliant today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
      
      {/* Interactive Progress Tracker */}
      <div className="order-1 lg:order-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-sm font-medium text-foreground">Interactive Progress Tracker</h4>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <HelpCircle className="h-3 w-3" />
              Click steps for details
            </span>
          </div>
          <div className="space-y-3">
            <InteractiveWorkflowItem 
              label="CIPC Name Reservation" 
              status="completed" 
              isSelected={selectedStep === "CIPC Name Reservation"}
              onClick={() => handleStepClick("CIPC Name Reservation")}
              highlighted={showResults && getMissingSteps().includes("CIPC Name Reservation")}
            />
            <InteractiveWorkflowItem 
              label="Company Registration" 
              status="active" 
              active 
              isSelected={selectedStep === "Company Registration"}
              onClick={() => handleStepClick("Company Registration")}
              highlighted={showResults && getMissingSteps().includes("Company Registration")}
            />
            <InteractiveWorkflowItem 
              label="SARS Tax Registration" 
              status="pending"
              isSelected={selectedStep === "SARS Tax Registration"}
              onClick={() => handleStepClick("SARS Tax Registration")}
              highlighted={showResults && getMissingSteps().includes("SARS Tax Registration")}
            />
            <InteractiveWorkflowItem 
              label="B-BBEE Certificate" 
              status="pending"
              isSelected={selectedStep === "B-BBEE Certificate"}
              onClick={() => handleStepClick("B-BBEE Certificate")}
              highlighted={showResults && getMissingSteps().includes("B-BBEE Certificate")}
            />
            <InteractiveWorkflowItem 
              label="Bank Account Setup" 
              status="pending"
              isSelected={selectedStep === "Bank Account Setup"}
              onClick={() => handleStepClick("Bank Account Setup")}
              highlighted={showResults && getMissingSteps().includes("Bank Account Setup")}
            />
          </div>
          
          {/* Technical Detail Popup */}
          <AnimatePresence>
            {selectedStep && cipcStepDetails[selectedStep] && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ type: "spring", ...springConfig }}
                className="overflow-hidden"
              >
                <div className="rounded-lg bg-primary/10 border border-primary/30 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-medium text-foreground">{cipcStepDetails[selectedStep].title}</h5>
                    <button onClick={() => setSelectedStep(null)} className="text-muted-foreground hover:text-foreground">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {cipcStepDetails[selectedStep].detail}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <Cog className="h-3 w-3" />
                    {cipcStepDetails[selectedStep].iePrinciple}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Compliance Calculator Modal */}
      <AnimatePresence>
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => resetQuiz()}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", ...springConfig }}
              className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground">Compliance Calculator</h3>
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
                          className={`h-1 flex-1 rounded-full ${i <= quizStep ? 'bg-primary' : 'bg-border'}`} 
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
                      <motion.button
                        key={option}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleQuizAnswer(option)}
                        className="w-full text-left p-3 rounded-lg border border-border bg-secondary/30 hover:border-primary hover:bg-primary/10 transition-all text-foreground"
                      >
                        {option}
                      </motion.button>
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
                        <div key={step} className="flex items-center gap-2 p-2 rounded-lg bg-primary/10 border border-primary/30">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span className="text-sm text-foreground">{step}</span>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-center">
                        <Check className="h-8 w-8 text-green-500 mx-auto mb-2" />
                        <p className="text-foreground font-medium">You&apos;re fully compliant!</p>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => resetQuiz()} className="flex-1">
                      Retake
                    </Button>
                    <Button asChild className="flex-1 bg-primary text-primary-foreground">
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

function InteractiveWorkflowItem({ 
  label, 
  status, 
  active = false,
  isSelected = false,
  onClick,
  highlighted = false
}: { 
  label: string
  status: "completed" | "active" | "pending"
  active?: boolean 
  isSelected?: boolean
  onClick?: () => void
  highlighted?: boolean
}) {
  const colors = {
    completed: "bg-green-500/20 text-green-400",
    active: "bg-primary/20 text-primary",
    pending: "bg-secondary text-muted-foreground",
  }
  
  return (
    <motion.div 
      onClick={onClick}
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-3 rounded-lg border p-3 transition-all cursor-pointer ${
        isSelected 
          ? "border-primary bg-primary/10 ring-2 ring-primary/50" 
          : highlighted 
            ? "border-yellow-500 bg-yellow-500/10 ring-2 ring-yellow-500/50"
            : active 
              ? "border-primary bg-primary/5" 
              : "border-border bg-secondary/30 hover:border-primary/50"
      }`}
    >
      <motion.div 
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${colors[status]}`}
        animate={isSelected ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        {status === "completed" && <Check className="h-4 w-4" />}
        {status === "active" && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        )}
        {status === "pending" && <span className="text-xs">...</span>}
      </motion.div>
      <span className="text-sm font-medium text-foreground flex-1">{label}</span>
      <motion.div
        animate={{ opacity: isSelected ? 1 : 0.5 }}
        className="text-muted-foreground"
      >
        <HelpCircle className="h-4 w-4" />
      </motion.div>
    </motion.div>
  )
}

function FramerStage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", ...springConfig }}
      className="grid items-center gap-12 lg:grid-cols-2"
    >
      <div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-sm font-medium text-foreground">Framer Architecture</h4>
            <span className="text-xs text-muted-foreground">Conversion-Focused</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Conversion Rate" value="+47%" change="Industry avg: 2.3%" />
            <StatCard label="Load Time" value="0.8s" change="95+ PageSpeed" />
            <StatCard label="Mobile Score" value="100" change="Lighthouse" />
            <StatCard label="SEO Ready" value="Yes" change="Schema markup" />
          </div>
          <div className="mt-4 rounded-lg bg-secondary/50 p-4">
            <p className="text-xs text-muted-foreground mb-2">Design System</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-foreground">-3% Letter Spacing</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm text-foreground">Bento-Box UI</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1">
          <Globe className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Stage 2: Digital Architecture</span>
        </div>
        <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
          High-Converting Framer Websites
        </h3>
        <p className="mb-6 text-lg text-muted-foreground">
          We build high-performance, high-converting websites on Framer that act as 
          reliable sales engines - not just pretty pages.
        </p>
        <ul className="mb-8 space-y-3">
          <li className="flex items-center gap-3 text-muted-foreground">
            <Check className="h-5 w-5 text-primary" />
            Conversion-focused architecture
          </li>
          <li className="flex items-center gap-3 text-muted-foreground">
            <Check className="h-5 w-5 text-primary" />
            Mobile-first responsive design
          </li>
          <li className="flex items-center gap-3 text-muted-foreground">
            <Check className="h-5 w-5 text-primary" />
            SEO & performance optimized
          </li>
        </ul>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="https://cal.com/bonny-cfb1wp" target="_blank" rel="noopener noreferrer">
              Build your sales engine
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

function AIBrandingStage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", ...springConfig }}
      className="grid items-center gap-12 lg:grid-cols-2"
    >
      <div className="order-2 lg:order-1">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1">
          <Lightbulb className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Stage 3: Agentic AI Branding</span>
        </div>
        <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
          Autonomous Brand Assets
        </h3>
        <p className="mb-6 text-lg text-muted-foreground">
          We deploy Agentic AI to generate autonomous assets - logos, professional 
          copywriting, and digital spokespeople that work 24/7.
        </p>
        <ul className="mb-8 space-y-3">
          <li className="flex items-center gap-3 text-muted-foreground">
            <Check className="h-5 w-5 text-primary" />
            AI-generated logo systems
          </li>
          <li className="flex items-center gap-3 text-muted-foreground">
            <Check className="h-5 w-5 text-primary" />
            Professional copywriting
          </li>
          <li className="flex items-center gap-3 text-muted-foreground">
            <Check className="h-5 w-5 text-primary" />
            Digital spokesperson avatars
          </li>
        </ul>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="https://cal.com/bonny-cfb1wp" target="_blank" rel="noopener noreferrer">
              Generate your brand
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
      <div className="order-1 lg:order-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="grid grid-cols-2 gap-4">
            <BrandAssetCard name="Logo System" type="AI Generated" />
            <BrandAssetCard name="Brand Voice" type="Copywriting" />
            <BrandAssetCard name="Spokesperson" type="Digital Avatar" />
            <BrandAssetCard name="Social Kit" type="Templates" />
          </div>
          <div className="mt-4 rounded-lg bg-primary/10 border border-primary/30 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">Assets Generated</span>
              <span className="text-lg font-bold text-primary">24/7</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function AutomationStage() {
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", ...springConfig }}
      className="grid items-center gap-12 lg:grid-cols-2"
    >
      <div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-sm font-medium text-foreground">Automation Dashboard</h4>
            <motion.span 
              animate={{ 
                backgroundColor: isProcessing ? ["rgba(34, 197, 94, 0.2)", "rgba(34, 197, 94, 0.4)", "rgba(34, 197, 94, 0.2)"] : "rgba(34, 197, 94, 0.2)"
              }}
              transition={{ duration: 1, repeat: isProcessing ? Infinity : 0 }}
              className="rounded-full px-2 py-0.5 text-xs text-primary"
            >
              {isProcessing ? "Processing" : "Live"}
            </motion.span>
          </div>
          <div className="space-y-3">
            <LiveAutomationItem label="Order Processing" status={isProcessing && currentStep >= 2 ? "running" : "ready"} />
            <LiveAutomationItem label="Invoice Generation" status={isProcessing && currentStep >= 3 ? "running" : "ready"} />
            <LiveAutomationItem label="Customer Onboarding" status={isProcessing && currentStep >= 4 ? "running" : "ready"} />
            <LiveAutomationItem label="Report Generation" status="scheduled" />
          </div>
          
          {/* Live Status Simulation */}
          <div className="mt-4 rounded-lg bg-secondary/50 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Manual Tasks Eliminated</span>
              <span className="text-xl font-bold text-primary">93%</span>
            </div>
            
            {/* Typewriter Status */}
            <motion.div 
              className="mt-3 p-3 rounded-lg bg-background/50 border border-border font-mono text-xs"
              animate={{ borderColor: isProcessing ? "rgba(34, 197, 94, 0.5)" : "rgba(63, 63, 70, 0.5)" }}
            >
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <motion.div 
                  className="h-2 w-2 rounded-full bg-primary"
                  animate={isProcessing ? { opacity: [1, 0.3, 1] } : { opacity: 0.5 }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                Status:
              </div>
              <TypewriterText 
                text={isProcessing ? automationSteps[currentStep] : "Ready for next task..."} 
                isActive={isProcessing}
              />
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setCurrentStep(0)
                setIsProcessing(true)
              }}
              disabled={isProcessing}
              className="mt-3 w-full text-center text-xs text-primary hover:text-primary/80 disabled:opacity-50"
            >
              {isProcessing ? "Simulating..." : "Run Simulation"}
            </motion.button>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1">
          <Cog className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Stage 4: Autonomous Operations</span>
        </div>
        <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
          Python & n8n Automations
        </h3>
        <p className="mb-6 text-lg text-muted-foreground">
          We integrate Autonomous Business Automations using Python and n8n to eliminate 
          manual friction and handle operations on autopilot.
        </p>
        <ul className="mb-8 space-y-3">
          <li className="flex items-center gap-3 text-muted-foreground">
            <Check className="h-5 w-5 text-primary" />
            Order processing on autopilot
          </li>
          <li className="flex items-center gap-3 text-muted-foreground">
            <Check className="h-5 w-5 text-primary" />
            Automated invoicing & follow-ups
          </li>
          <li className="flex items-center gap-3 text-muted-foreground">
            <Check className="h-5 w-5 text-primary" />
            AWS cloud infrastructure
          </li>
        </ul>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="https://cal.com/bonny-cfb1wp" target="_blank" rel="noopener noreferrer">
              Automate your operations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

function TypewriterText({ text, isActive }: { text: string; isActive: boolean }) {
  const [displayText, setDisplayText] = useState("")
  
  useEffect(() => {
    if (!isActive) {
      setDisplayText(text)
      return
    }
    
    setDisplayText("")
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 30)
    
    return () => clearInterval(interval)
  }, [text, isActive])
  
  return (
    <span className="text-foreground">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-1.5 h-3 bg-primary ml-0.5"
      />
    </span>
  )
}

function StatCard({ 
  label, 
  value, 
  change 
}: { 
  label: string
  value: string
  change: string 
}) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="rounded-lg bg-secondary/50 p-4"
    >
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-primary">{change}</p>
    </motion.div>
  )
}

function BrandAssetCard({ name, type }: { name: string; type: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex flex-col items-center gap-2 rounded-xl border border-border bg-secondary/50 p-4 transition-all hover:border-primary/50"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
        <Lightbulb className="h-6 w-6 text-primary" />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs text-muted-foreground">{type}</span>
    </motion.div>
  )
}

function LiveAutomationItem({ label, status }: { label: string; status: "running" | "ready" | "scheduled" }) {
  return (
    <motion.div 
      className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-3"
      animate={{
        borderColor: status === "running" ? "rgba(34, 197, 94, 0.5)" : "rgba(63, 63, 70, 0.5)",
        backgroundColor: status === "running" ? "rgba(34, 197, 94, 0.05)" : "rgba(63, 63, 70, 0.3)"
      }}
      transition={{ type: "spring", ...springConfig }}
    >
      <div className="flex items-center gap-3">
        <motion.div 
          className={`h-2 w-2 rounded-full ${
            status === "running" ? "bg-green-400" : 
            status === "ready" ? "bg-blue-400" : "bg-yellow-400"
          }`}
          animate={status === "running" ? { scale: [1, 1.3, 1], opacity: [1, 0.5, 1] } : {}}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        <span className="text-sm font-medium text-foreground">{label}</span>
      </div>
      <span className={`text-xs ${
        status === "running" ? "text-green-400" : 
        status === "ready" ? "text-blue-400" : "text-yellow-400"
      }`}>
        {status === "running" ? "Running" : status === "ready" ? "Ready" : "Scheduled"}
      </span>
    </motion.div>
  )
}
