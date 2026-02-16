import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "AS Click | Wedding, Portrait & Cinematic Photography",
  description:
    "AS Click is a professional photography portfolio specializing in weddings, portraits, and cinematic storytelling. Book your unforgettable moments today.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </ThemeProvider>

      </body>
    </html>
  )
}
