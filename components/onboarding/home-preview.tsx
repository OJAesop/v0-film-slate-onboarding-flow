"use client"

import { cn } from "@/lib/utils"

const contentRows = [
  {
    title: "Top picks for you",
    items: [
      { id: 1, image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200&h=300&fit=crop" },
      { id: 2, image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=200&h=300&fit=crop" },
      { id: 3, image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=200&h=300&fit=crop" },
      { id: 4, image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=300&fit=crop" },
      { id: 5, image: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=200&h=300&fit=crop" },
    ],
  },
  {
    title: "Trending now",
    items: [
      { id: 6, image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=200&h=300&fit=crop" },
      { id: 7, image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200&h=300&fit=crop" },
      { id: 8, image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=200&h=300&fit=crop" },
      { id: 9, image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=200&h=300&fit=crop" },
      { id: 10, image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=200&h=300&fit=crop" },
    ],
  },
  {
    title: "Because you like Drama",
    items: [
      { id: 11, image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=200&h=300&fit=crop" },
      { id: 12, image: "https://images.unsplash.com/photo-1460881680093-7c9e5d4a6185?w=200&h=300&fit=crop" },
      { id: 13, image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=200&h=300&fit=crop" },
      { id: 14, image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=200&h=300&fit=crop" },
      { id: 15, image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=200&h=300&fit=crop" },
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
