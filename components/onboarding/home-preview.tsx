"use client"

import { cn } from "@/lib/utils"

const contentRows = [
  {
    title: "Top picks for you",
    items: [
      { id: 1, title: "Midnight Chase", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200&h=300&fit=crop" },
      { id: 2, title: "Neon Streets", image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=200&h=300&fit=crop" },
      { id: 3, title: "The Verdict", image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=200&h=300&fit=crop" },
      { id: 4, title: "Ocean Depths", image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=200&h=300&fit=crop" },
      { id: 5, title: "City Lights", image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=200&h=300&fit=crop" },
    ],
  },
  {
    title: "Trending now",
    items: [
      { id: 6, title: "Desert Storm", image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200&h=300&fit=crop" },
      { id: 7, title: "Mountain Peak", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&h=300&fit=crop" },
      { id: 8, title: "Urban Legend", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&h=300&fit=crop" },
      { id: 9, title: "Aurora", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=200&h=300&fit=crop" },
      { id: 10, title: "Golden Hour", image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=200&h=300&fit=crop" },
    ],
  },
  {
    title: "Because you like Drama",
    items: [
      { id: 11, title: "Broken Silence", image: "https://images.unsplash.com/photo-1485846147915-28f13af6ea50?w=200&h=300&fit=crop" },
      { id: 12, title: "The Letter", image: "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?w=200&h=300&fit=crop" },
      { id: 13, title: "Fading Light", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&h=300&fit=crop" },
      { id: 14, title: "Last Words", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=200&h=300&fit=crop" },
      { id: 15, title: "Promises", image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=200&h=300&fit=crop" },
    ],
  },
]

interface HomePreviewProps {
  onSelectContent: () => void
}

export function HomePreview({ onSelectContent }: HomePreviewProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between bg-background/80 backdrop-blur-md px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
            <svg
              className="h-5 w-5 text-primary-foreground"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-foreground">FilmSlate</span>
        </div>
        <div className="flex gap-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 pb-8">
        {contentRows.map((row, rowIndex) => (
          <section key={rowIndex} className="mb-8">
            <h2 className="mb-4 px-6 text-lg font-semibold text-foreground">
              {row.title}
            </h2>
            <div className="flex gap-3 overflow-x-auto px-6 scrollbar-hide">
              {row.items.map((item, index) => (
                <button
                  key={item.id}
                  onClick={onSelectContent}
                  className={cn(
                    "flex-shrink-0 overflow-hidden rounded-lg transition-transform hover:scale-105",
                    index === 0 && rowIndex === 0 ? "w-32 h-48" : "w-28 h-40"
                  )}
                >
                  <img
                    src={item.image}
                    alt="Content thumbnail"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
