"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        border-b border-border
        bg-background/80 backdrop-blur-2xl
        ${scrolled ? "shadow-lg shadow-black/5 dark:shadow-black/30" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-[0.25em] text-foreground hover:opacity-80 transition"
        >
          <h2 className="text-2xl font-bold tracking-tight">
              AS
              <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                CLICK
              </span>
            </h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link
            href="/work"
            className="relative text-muted-foreground hover:text-foreground transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
          >
            Work
          </Link>

          <Link
            href="/about"
            className="relative text-muted-foreground hover:text-foreground transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="relative text-muted-foreground hover:text-foreground transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
          >
            Contact
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-muted cursor-pointer"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">

          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-muted cursor-pointer"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-muted cursor-pointer"
              >
                <Menu size={20} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[260px] bg-background border-l border-border"
            >
              <div className="flex flex-col pl-8 gap-6 mt-12 text-base font-medium">

                <Link
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition"
                  href="#work"
                >
                  Work
                </Link>

                <Link
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition"
                  href="#about"
                >
                  About
                </Link>

                <Link
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition"
                  href="#contact"
                >
                  Contact
                </Link>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </motion.nav>
  )
}
