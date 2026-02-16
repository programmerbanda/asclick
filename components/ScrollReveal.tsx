"use client"

import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  delay?: number
}

export default function ScrollReveal({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.8, 0.25, 1], // smooth cubic bezier
      }}
    >
      {children}
    </motion.div>
  )
}
