"use client"

import ScrollReveal from "@/components/ScrollReveal"

const testimonials = [
  {
    name: "Riya Sharma",
    text: "Absolutely loved the wedding coverage. Every moment felt cinematic."
  },
  {
    name: "Arjun Mehta",
    text: "Professional, creative and extremely detail-oriented."
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-16">

        <ScrollReveal>
          <h2 className="text-3xl text-black dark:text-white md:text-5xl font-semibold">
            What Clients Say
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="bg-muted border border-border rounded-2xl p-8 shadow-sm text-left hover:-translate-y-2 transition">
                <p className=" text-black dark:text-white leading-relaxed">
                  {item.text}
                </p>
                <p className="mt-6 text-sm text-black dark:text-white font-medium">
                  — {item.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
