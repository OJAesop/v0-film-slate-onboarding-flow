"use client"

import { Button } from "@/components/ui/button"
import { Play, Plus, ChevronLeft } from "lucide-react"

interface ContentHeroProps {
  onBack: () => void
  onPlay: () => void
}

export function ContentHero({ onBack, onPlay }: ContentHeroProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=1200&fit=crop"
          alt="Featured content"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Back Button */}
      <header className="relative z-10 px-4 pt-4">
        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-background/40 backdrop-blur-sm text-foreground hover:bg-background/60 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </header>

      {/* Content Info */}
      <div className="relative z-10 mt-auto px-6 pb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary font-medium">98% Match</span>
            <span>2024</span>
            <span>2h 28m</span>
            <span className="rounded border border-muted-foreground px-1.5 py-0.5 text-xs">
              HD
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground text-balance">
            The Last Horizon
          </h1>

          <p className="text-base leading-relaxed text-muted-foreground line-clamp-2">
            A gripping tale of survival and hope as humanity faces its greatest challenge. When Earth&apos;s last defenders unite, the future hangs in the balance.
          </p>

          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span>Sci-Fi</span>
            <span>•</span>
            <span>Action</span>
            <span>•</span>
            <span>Drama</span>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Button
            onClick={onPlay}
            size="lg"
            className="flex-1 gap-2 py-6 text-base font-semibold"
          >
            <Play className="h-5 w-5 fill-current" />
            Play
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="gap-2 py-6"
          >
            <Plus className="h-5 w-5" />
            Watchlist
          </Button>
        </div>
      </div>
    </div>
  )
}
