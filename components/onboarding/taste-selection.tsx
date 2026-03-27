"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Flame, Theater, Eye, Heart, Sparkles, Film, Check } from "lucide-react"

const genres = [
  { id: "action", name: "Action", icon: Flame, bg: "bg-orange-600/40" },
  { id: "drama", name: "Drama", icon: Theater, bg: "bg-indigo-600/40" },
  { id: "thriller", name: "Thriller", icon: Eye, bg: "bg-slate-600/40" },
  { id: "romance", name: "Romance", icon: Heart, bg: "bg-pink-500/40" },
  { id: "indie", name: "Indie", icon: Sparkles, bg: "bg-amber-500/40" },
  { id: "documentary", name: "Documentary", icon: Film, bg: "bg-emerald-600/40" },
]

interface TasteSelectionProps {
  onContinue: (selected: string[]) => void
}

export function TasteSelection({ onContinue }: TasteSelectionProps) {
  const [selected, setSelected] = useState<string[]>([])

  function handleGenreClick(id: string) {
    alert(`Clicked: ${id}`)
    if (selected.includes(id)) {
      setSelected(selected.filter((g) => g !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  function handleContinue() {
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
            <div
              key={genre.id}
              onClick={() => handleGenreClick(genre.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleGenreClick(genre.id)
                }
              }}
              className={cn(
                "relative flex h-28 cursor-pointer flex-col items-start justify-between rounded-xl p-4 transition-all duration-200",
                genre.bg,
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
            </div>
          )
        })}
      </div>

      <div className="mt-8">
        <Button
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
