"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
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
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
]

const companyLinks = [
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@asclick.com", label: "Email" },
]

export default function Footer() {
  const pathname = usePathname()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Thank you for subscribing!")
  }

  const linkClasses = (href: string) =>
    `transition hover:text-black dark:hover:text-foreground ${
      pathname === href
        ? "text-black dark:text-foreground font-medium"
        : "text-gray-600 dark:text-muted-foreground"
    }`

  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative border-t border-gray-200 bg-white dark:border-border dark:bg-background/70 dark:backdrop-blur-xl overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/5 via-transparent to-pink-500/5 blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-6">

            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-foreground">
              AS
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                CLICK
              </span>
            </h2>

            <p className="text-gray-600 text-sm dark:text-muted-foreground leading-relaxed">
              Crafting cinematic wedding photography that captures timeless emotions.
              Premium storytelling visuals across India.
            </p>

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

            {/* Social */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.15 }}
                  className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 dark:text-muted-foreground dark:hover:text-foreground dark:hover:bg-muted transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h4>

            <nav className="flex flex-col gap-3 text-sm">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className={linkClasses(item.href)}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* IMPORTANT LINKS */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Important Links
            </h4>

            <nav className="flex flex-col gap-3 text-sm">
              {companyLinks.map((item) => (
                <Link key={item.href} href={item.href} className={linkClasses(item.href)}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* NEWSLETTER */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Stay Updated
            </h4>

            <p className="text-gray-600 text-sm dark:text-muted-foreground">
              Get updates on new shoots & exclusive wedding offers.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex items-center border border-gray-300 dark:border-border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary transition"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-transparent outline-none text-sm"
              />
              <button
                type="submit"
                className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-muted transition"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="origin-left mt-16 h-[1px] bg-gradient-to-r from-primary to-pink-500"
        />

        {/* Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-muted-foreground">
          <p>© {new Date().getFullYear()} ASCLICK. All rights reserved.</p>
          <p className="text-xs opacity-70">Designed with precision & passion.</p>
        </div>

      </div>
    </motion.footer>
  )
}
