"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Flame, Theater, Eye, Heart, Sparkles, Film, Check } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Genre {
  id: string
  name: string
  icon: LucideIcon
}

const genres: Genre[] = [
  { id: "action", name: "Action", icon: Flame },
  { id: "drama", name: "Drama", icon: Theater },
  { id: "thriller", name: "Thriller", icon: Eye },
  { id: "romance", name: "Romance", icon: Heart },
  { id: "indie", name: "Indie", icon: Sparkles },
  { id: "documentary", name: "Documentary", icon: Film },
]

const genreStyles: Record<string, string> = {
  action: "bg-orange-600/40",
  drama: "bg-indigo-600/40",
  thriller: "bg-slate-600/40",
  romance: "bg-pink-500/40",
  indie: "bg-amber-500/40",
  documentary: "bg-emerald-600/40",
}

interface TasteSelectionProps {
  onContinue: (selected: string[]) => void
}

export function TasteSelection({ onContinue }: TasteSelectionProps) {
  const [selected, setSelected] = useState<string[]>([])

  const toggleGenre = (id: string) => {
    console.log("[v0] toggleGenre called:", id)
    setSelected((prev) => {
      const newSelected = prev.includes(id) 
        ? prev.filter((g) => g !== id) 
        : [...prev, id]
      console.log("[v0] New selected:", newSelected)
      return newSelected
    })
  }

  const handleContinue = () => {
    console.log("[v0] Continue clicked, selected:", selected)
    onContinue(selected)
  }

  return (
    <div className="min-h-screen bg-background px-6 pb-8 pt-16">
      <div className="mb-10">
        <h1 className="mb-3 text-balance text-3xl font-bold tracking-tight text-foreground">
          What do you feel like watching?
        </h1>
        <p className="text-muted-foreground">
          Select a few to personalise your experience
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {genres.map((genre) => {
          const Icon = genre.icon
          const isSelected = selected.includes(genre.id)
          return (
            <button
              type="button"
              key={genre.id}
              onClick={() => toggleGenre(genre.id)}
              className={cn(
                "relative flex h-28 flex-col items-start justify-between overflow-hidden rounded-xl p-4 text-left transition-all duration-200 cursor-pointer",
                genreStyles[genre.id],
                isSelected
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-[1.02]"
                  : "hover:scale-[1.01] hover:brightness-110"
              )}
            >
              <Icon className="h-7 w-7 text-foreground/80" />
              <span className="text-lg font-semibold text-foreground">
                {genre.name}
              </span>
              {isSelected && (
                <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <Check className="h-4 w-4 text-primary-foreground" strokeWidth={3} />
                </div>
              )}
            </button>
          )
        })}
      </div>

      <div className="mt-8">
        <Button
          type="button"
          onClick={handleContinue}
          disabled={selected.length === 0}
          className="w-full py-6 text-base font-semibold"
          size="lg"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
