import Hero from "@/components/sections/Hero"
import Featured from "@/components/sections/Featured"
import Stats from "@/components/sections/Stats"
import Story from "@/components/sections/Story"
import Testimonials from "@/components/sections/Testimonials"
import FinalCTA from "@/components/sections/CTA"
import Signature from "@/components/sections/Signature"

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Stats />
      <Story />
      <Signature />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
