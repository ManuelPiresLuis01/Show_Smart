import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { I18nProvider } from "@/components/providers/i18n-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Competency Certification Platform",
  description: "Take exams, get certified, and verify your competencies",
  generator: "Certification Platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider>
          <I18nProvider>
            <div className="min-h-screen flex flex-col">
              <Suspense fallback={<div>Loading...</div>}>
                <Navigation />
              </Suspense>
              <main className="flex-1">{children}</main>
              <Suspense fallback={<div>Loading...</div>}>
                <Footer />
              </Suspense>
            </div>
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
