"use client"

import Link from "next/link"
import { Instagram, Mail, MapPin, Camera } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  return (
    <footer className="border-t border-border bg-background overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}   // 🔥 Every time animate
        className="max-w-7xl mx-auto px-6 py-20"
      >

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <motion.div variants={item} className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold tracking-widest">
              <Camera size={18} />
              AMIT STUDIO
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Capturing timeless moments through minimalist and cinematic
              photography. Based in India, available worldwide.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} />
              Delhi, India
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider">
              QUICK LINKS
            </h4>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#work" className="hover:text-foreground transition">
                Portfolio
              </Link>
              <Link href="#about" className="hover:text-foreground transition">
                About
              </Link>
              <Link href="#services" className="hover:text-foreground transition">
                Services
              </Link>
              <Link href="#contact" className="hover:text-foreground transition">
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider">
              CONNECT
            </h4>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">

              <a
                href="mailto:hello@amitstudio.com"
                className="flex items-center gap-2 hover:text-foreground transition hover:translate-x-1 duration-300"
              >
                <Mail size={14} />
                hello@amitstudio.com
              </a>

              <a
                href="#"
                className="flex items-center gap-2 hover:text-foreground transition hover:translate-x-1 duration-300"
              >
                <Instagram size={14} />
                Instagram
              </a>

              <a
                href="#"
                className="flex items-center gap-2 hover:text-foreground transition hover:translate-x-1 duration-300"
              >
                <Camera size={14} />
                Behance
              </a>

            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={item}
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>
            © {new Date().getFullYear()} AMIT STUDIO. All rights reserved.
          </p>

          <p>
            Designed & Developed with ❤️ using Next.js
          </p>
        </motion.div>

      </motion.div>
    </footer>
  )
}
