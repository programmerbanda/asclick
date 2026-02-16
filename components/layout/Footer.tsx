"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react"

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
  }

  return (
    <footer className="relative border-t border-gray-200 bg-white dark:border-border dark:bg-background/70 dark:backdrop-blur-xl">

      {/* Top border */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gray-200 dark:bg-gradient-to-r dark:from-transparent dark:via-primary dark:to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-16 md:grid-cols-12"
        >

          {/* LEFT SECTION */}
          <div className="space-y-6 md:col-span-6 max-w-md">

            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-foreground">
              AS
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                CLICK
              </span>
            </h2>

            <p className="text-gray-600 text-sm dark:text-muted-foreground leading-relaxed">
              Crafting cinematic photography that captures timeless emotions.
              Wedding, portrait & storytelling visuals that leave a lasting impression.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-600 dark:text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Delhi, India
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@asclick.com
              </div>
            </div>

            {/* 🔥 Animated Social Icons (Every Time) */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 dark:text-muted-foreground dark:hover:text-foreground dark:hover:bg-muted transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

          </div>

          {/* NAVIGATION */}
          <div className="space-y-6 md:col-span-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-900 dark:text-foreground">
              Navigation
            </h4>

            <nav className="flex flex-col gap-3">
              {navigation.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="relative w-fit text-sm text-gray-600 hover:text-black dark:text-muted-foreground dark:hover:text-foreground transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black dark:after:bg-foreground after:transition-all hover:after:w-full"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* NEWSLETTER */}
          <div className="space-y-6 md:col-span-3 max-w-sm">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-900 dark:text-foreground">
              Stay Updated
            </h4>

            <p className="text-gray-600 text-sm dark:text-muted-foreground">
              Get updates on new shoots & exclusive offers.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex items-center border border-gray-300 dark:border-border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary transition"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Email address"
                className="flex-1 px-4 py-3 bg-transparent outline-none text-sm text-gray-900 dark:text-foreground"
              />
              <button
                type="submit"
                className="px-4 py-3 text-gray-500 hover:text-black hover:bg-gray-100 dark:text-muted-foreground dark:hover:text-foreground dark:hover:bg-muted transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-200 dark:border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-muted-foreground">
          <p>
            © {new Date().getFullYear()} ASCLICK. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-black dark:hover:text-foreground transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black dark:hover:text-foreground transition">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
