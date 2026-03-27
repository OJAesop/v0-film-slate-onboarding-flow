"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, SkipForward } from "lucide-react"
import { cn } from "@/lib/utils"

const movies = [
  {
    id: 1,
    title: "The Dark Knight",
    poster: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=300&h=450&fit=crop",
  },
  {
    id: 2,
    title: "Inception",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=450&fit=crop",
  },
  {
    id: 3,
    title: "Interstellar",
    poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300&h=450&fit=crop",
  },
  {
    id: 4,
    title: "The Prestige",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
  },
  {
    id: 5,
    title: "Dunkirk",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
  },
  {
    id: 6,
    title: "Memento",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
  },
]

interface PreferenceRefinementProps {
  onContinue: () => void
  onSkip: () => void
}

export function PreferenceRefinement({ onContinue, onSkip }: PreferenceRefinementProps) {
  const [liked, setLiked] = useState<number[]>([])
  const [skipped, setSkipped] = useState<number[]>([])

  const handleLike = (id: number) => {
    setLiked((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
    setSkipped((prev) => prev.filter((i) => i !== id))
  }

  const handleSkip = (id: number) => {
    setSkipped((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
    setLiked((prev) => prev.filter((i) => i !== id))
  }

  const hasInteracted = liked.length > 0 || skipped.length > 0

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 pb-8 pt-16">
      <div className="mb-8">
        <h1 className="mb-3 text-balance text-3xl font-bold tracking-tight text-foreground">
          Pick a few you like
        </h1>
        <p className="text-muted-foreground">
          This helps us improve your recommendations
        </p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto pb-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={cn(
              "flex items-center gap-4 rounded-xl bg-card p-3 transition-all",
              liked.includes(movie.id) && "ring-2 ring-primary",
              skipped.includes(movie.id) && "opacity-50"
            )}
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="h-24 w-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-card-foreground">{movie.title}</h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleLike(movie.id)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-all",
                  liked.includes(movie.id)
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <Heart
                  className={cn("h-5 w-5", liked.includes(movie.id) && "fill-current")}
                />
              </button>
              <button
                onClick={() => handleSkip(movie.id)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-all",
                  skipped.includes(movie.id)
                    ? "bg-muted text-muted-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <SkipForward className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        <Button
          onClick={onContinue}
          disabled={!hasInteracted}
          className="w-full py-6 text-base font-semibold"
          size="lg"
        >
          Continue
        </Button>
        <button
          onClick={onSkip}
          className="w-full py-3 text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Skip for now
        </button>
      </div>
    </div>
  )
}
