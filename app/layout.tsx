import type { Metadata } from 'next'
import { Inter, Poppins, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Providers } from './providers'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})
const bebasNeue = Bebas_Neue({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue'
})

export const metadata: Metadata = {
  title: 'Alegria 2026 - Marvel-themed Event',
  description: 'Join us for the ultimate Marvel-themed celebration event',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.variable} ${bebasNeue.variable}`}>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}
