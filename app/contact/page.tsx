"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      alert("Message Sent Successfully 🚀")
    }, 2000)
  }

  return (
    <div className="relative bg-white dark:bg-background text-gray-900 dark:text-foreground overflow-hidden">

      {/* Background Accent Blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl opacity-30"></div>

      {/* HERO */}
      <section className="relative pt-24 pb-8 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold tracking-tight"
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
          className="mt-4 text-sm text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto"
        >
          Let’s capture your story beautifully. Reach out and let’s create
          something timeless together.
        </motion.p>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-3xl font-semibold tracking-tight">
              Contact Information
            </h2>

            <div className="space-y-8 text-gray-600 dark:text-muted-foreground">

              <div className="flex items-start gap-4 group">
                <Mail className="w-6 h-6 text-primary mt-1 group-hover:scale-110 transition" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-foreground">
                    Email
                  </p>
                  <p>hello@asclick.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <Phone className="w-6 h-6 text-primary mt-1 group-hover:scale-110 transition" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-foreground">
                    Phone
                  </p>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <MapPin className="w-6 h-6 text-primary mt-1 group-hover:scale-110 transition" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-foreground">
                    Location
                  </p>
                  <p>Motihari, India</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE - PREMIUM FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Gradient Border Wrapper */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-primary to-pink-500">
              <div className="bg-white dark:bg-muted/40 backdrop-blur-xl p-8 rounded-2xl shadow-xl">

                <h2 className="text-2xl font-semibold mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                    <label className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 dark:border-border bg-white dark:bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-lg transition"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 dark:border-border bg-white dark:bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-lg transition"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your event..."
                      required
                      className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 dark:border-border bg-white dark:bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-lg transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-pink-500 text-white py-3 rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              </div>
            </div>

          </motion.div>

        </div>
      </section>
    </div>
  )
}
