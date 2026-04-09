import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo.png"
                  alt="Meresimplicity Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-semibold text-foreground tracking-tight">Meresimplicity</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A Venture Studio & Digital Engineering Firm. We engineer growth, we don&apos;t just design it. 
              Technical excellence, simplified.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Founded by Modipa Kgothatso Bonny - IE Specialist & Python Developer
            </p>
            <div className="mt-6">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Book Consultation
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  CIPC Registration
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Framer Websites
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  AI Branding
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Python Automation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  About Founder
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Meresimplicity. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
