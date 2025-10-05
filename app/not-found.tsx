import Link from 'next/link'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-heading text-gradient">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>
        <Button asChild className="glow">
          <Link href="/">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
