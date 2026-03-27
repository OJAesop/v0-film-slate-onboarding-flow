"use client"

import { useState } from "react"
import { TasteSelection } from "@/components/onboarding/taste-selection"
import { PreferenceRefinement } from "@/components/onboarding/preference-refinement"
import { SignupScreen } from "@/components/onboarding/signup-screen"
import { HomePreview } from "@/components/onboarding/home-preview"
import { ContentHero } from "@/components/onboarding/content-hero"

type Screen = "taste" | "preference" | "signup" | "home" | "hero"

export default function OnboardingFlow() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("taste")
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])

  const handleTasteComplete = (genres: string[]) => {
    setSelectedGenres(genres)
    setCurrentScreen("preference")
  }

  const handlePreferenceComplete = () => {
    setCurrentScreen("signup")
  }

  const handlePreferenceSkip = () => {
    setCurrentScreen("signup")
  }

  const handleSignupComplete = () => {
    setCurrentScreen("home")
  }

  const handleSignupSkip = () => {
    setCurrentScreen("home")
  }

  const handleContentSelect = () => {
    setCurrentScreen("hero")
  }

  const handleBackToHome = () => {
    setCurrentScreen("home")
  }

  const handlePlay = () => {
    // In a real app, this would start video playback
    console.log("Starting playback...")
  }

  return (
    <div className="mx-auto max-w-md">
      {currentScreen === "taste" && (
        <TasteSelection onContinue={handleTasteComplete} />
      )}
      {currentScreen === "preference" && (
        <PreferenceRefinement
          onContinue={handlePreferenceComplete}
          onSkip={handlePreferenceSkip}
        />
      )}
      {currentScreen === "signup" && (
        <SignupScreen
          onContinue={handleSignupComplete}
          onSkip={handleSignupSkip}
        />
      )}
      {currentScreen === "home" && (
        <HomePreview onSelectContent={handleContentSelect} />
      )}
      {currentScreen === "hero" && (
        <ContentHero onBack={handleBackToHome} onPlay={handlePlay} />
      )}
    </div>
  )
}
