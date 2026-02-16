import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Amit Studio | Photographer Portfolio",
  description: "Wedding, Portrait and Cinematic Photography Portfolio",
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
