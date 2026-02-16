"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-background text-gray-900 dark:text-foreground">

      {/* HERO */}
      <section className="py-24 md:py-32 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Get in{" "}
          <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto"
        >
          Let’s capture your story beautifully. Reach out and let’s create
          something timeless together.
        </motion.p>
      </section>

      {/* CONTACT SECTION */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* LEFT - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold">Contact Information</h2>

            <div className="space-y-6 text-gray-600 dark:text-muted-foreground">

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-foreground">
                    Email
                  </p>
                  <p>hello@asclick.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-foreground">
                    Phone
                  </p>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-foreground">
                    Location
                  </p>
                  <p>Delhi, India</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-muted/30 p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            <form className="space-y-6">

              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 dark:border-border bg-white dark:bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 dark:border-border bg-white dark:bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your event..."
                  className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 dark:border-border bg-white dark:bg-background focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl hover:opacity-90 transition"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>

            </form>
          </motion.div>

        </div>
      </section>

    </div>
  )
}
