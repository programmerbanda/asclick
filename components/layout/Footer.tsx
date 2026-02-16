"use client"

import Link from "next/link"
import { Instagram, Mail, MapPin, Camera } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-4">
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
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
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
          </div>

          {/* Contact / Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider">
              CONNECT
            </h4>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">

              <a
                href="mailto:hello@amitstudio.com"
                className="flex items-center gap-2 hover:text-foreground transition"
              >
                <Mail size={14} />
                hello@amitstudio.com
              </a>

              <a
                href="#"
                className="flex items-center gap-2 hover:text-foreground transition"
              >
                <Instagram size={14} />
                Instagram
              </a>

              <a
                href="#"
                className="flex items-center gap-2 hover:text-foreground transition"
              >
                <Camera size={14} />
                Behance
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">

          <p>
            © {new Date().getFullYear()} AMIT STUDIO. All rights reserved.
          </p>

          <p>
            Designed & Developed with ❤️ using Next.js
          </p>

        </div>
      </div>
    </footer>
  )
}
