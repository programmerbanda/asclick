"use client"

import Link from "next/link"
import { Instagram, Youtube, Linkedin, Mail, ArrowRight } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@asclick.com", label: "Email" },
]

export default function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: connect to newsletter API
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Top Grid */}
        <div className="grid gap-16 md:grid-cols-3">

          {/* Brand Section */}
          <div className="space-y-6 max-w-sm">
            <h2 className="text-2xl font-bold tracking-tight">
              AS<span className="text-primary">CLICK</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Crafting cinematic photography that captures timeless emotions.
              Wedding, portrait & storytelling visuals that leave a lasting impression.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">
              Navigation
            </h4>

            <nav className="flex flex-col gap-3">
              {navigation.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="relative w-fit text-muted-foreground hover:text-foreground transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 max-w-sm">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">
              Stay Updated
            </h4>

            <p className="text-muted-foreground">
              Get updates on new shoots, offers & creative stories.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex items-center border border-border rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-primary transition"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email address"
                className="flex-1 px-4 py-3 bg-transparent outline-none text-sm"
              />
              <button
                type="submit"
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">

          <p>
            © {new Date().getFullYear()} ASCLICK. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-foreground transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}
