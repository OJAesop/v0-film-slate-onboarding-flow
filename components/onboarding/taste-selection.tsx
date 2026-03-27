"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const genres = [
  { id: "action", name: "Action", gradient: "from-orange-600/40 to-red-800/40" },
  { id: "drama", name: "Drama", gradient: "from-blue-600/40 to-indigo-800/40" },
  { id: "thriller", name: "Thriller", gradient: "from-gray-600/40 to-slate-800/40" },
  { id: "romance", name: "Romance", gradient: "from-pink-500/40 to-rose-700/40" },
  { id: "indie", name: "Indie", gradient: "from-amber-500/40 to-yellow-700/40" },
  { id: "documentary", name: "Documentary", gradient: "from-emerald-600/40 to-teal-800/40" },
]

interface TasteSelectionProps {
  onContinue: (selected: string[]) => void
}

export function TasteSelection({ onContinue }: TasteSelectionProps) {
  const [selected, setSelected] = useState<string[]>([])

  const toggleGenre = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    )
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
            key={genre.id}
            onClick={() => toggleGenre(genre.id)}
            className={cn(
              "relative flex h-28 items-end justify-start overflow-hidden rounded-xl p-4 text-left transition-all duration-200",
              `bg-gradient-to-br ${genre.gradient}`,
              selected.includes(genre.id)
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-[1.02]"
                : "hover:scale-[1.01] hover:brightness-110"
            )}
          >
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
          onClick={() => onContinue(selected)}
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
