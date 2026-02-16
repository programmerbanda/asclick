"use client"

import ScrollReveal from "@/components/ScrollReveal"

const stats = [
  { number: "120+", label: "Projects Completed" },
  { number: "80+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
]

export default function Stats() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

        {stats.map((stat, index) => (
          <ScrollReveal key={index} delay={index * 0.2}>
            <div>
              <h3 className="text-4xl font-semibold">
                {stat.number}
              </h3>
              <p className="text-muted-foreground mt-2">
                {stat.label}
              </p>
            </div>
          </ScrollReveal>
        ))}

      </div>
    </section>
  )
}
