"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Flame, Theater, Eye, Heart, Sparkles, Film } from "lucide-react"

const genres = [
  { id: "action", name: "Action", bgColor: "rgba(234, 88, 12, 0.4)", icon: Flame },
  { id: "drama", name: "Drama", bgColor: "rgba(79, 70, 229, 0.4)", icon: Theater },
  { id: "thriller", name: "Thriller", bgColor: "rgba(71, 85, 105, 0.4)", icon: Eye },
  { id: "romance", name: "Romance", bgColor: "rgba(236, 72, 153, 0.4)", icon: Heart },
  { id: "indie", name: "Indie", bgColor: "rgba(245, 158, 11, 0.4)", icon: Sparkles },
  { id: "documentary", name: "Documentary", bgColor: "rgba(16, 185, 129, 0.4)", icon: Film },
]

interface TasteSelectionProps {
  onContinue: (selected: string[]) => void
}

export function TasteSelection({ onContinue }: TasteSelectionProps) {
  const [selected, setSelected] = useState<string[]>([])

  const toggleGenre = (id: string) => {
    console.log("[v0] toggleGenre called with:", id, "current selected:", selected)
    setSelected((prev) => {
      const newSelected = prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
      console.log("[v0] New selected state:", newSelected)
      return newSelected
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 pb-8 pt-16">
      <div className="mb-10">
        <h1 className="mb-3 text-balance text-3xl font-bold tracking-tight text-foreground">
          What do you feel like watching?
        </h1>
        <p className="text-muted-foreground">
          Select a few to personalise your experience
        </p>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-3">
        {genres.map((genre) => (
          <button
            type="button"
            key={genre.id}
            onClick={() => {
              console.log("[v0] Genre clicked:", genre.id)
              toggleGenre(genre.id)
            }}
            style={{ backgroundColor: genre.bgColor }}
            className={cn(
              "relative flex h-28 flex-col items-start justify-between overflow-hidden rounded-xl p-4 text-left transition-all duration-200",
              selected.includes(genre.id)
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-[1.02]"
                : "hover:scale-[1.01] hover:brightness-110"
            )}
          >
            <genre.icon className="h-7 w-7 text-foreground/80" />
            <span className="text-lg font-semibold text-foreground">
              {genre.name}
            </span>
            {selected.includes(genre.id) && (
              <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                <svg
                  className="h-4 w-4 text-primary-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <Button
          onClick={() => {
            console.log("[v0] Continue clicked, selected:", selected)
            onContinue(selected)
          }}
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
