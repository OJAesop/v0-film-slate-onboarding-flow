"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Film, Eye, EyeOff, Mail, Lock, User } from "lucide-react"

interface SignupScreenProps {
  onContinue: () => void
  onSkip: () => void
}

export function SignupScreen({ onContinue, onSkip }: SignupScreenProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would handle registration
    onContinue()
  }

  const isFormValid = formData.name && formData.email && formData.password.length >= 6

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-center gap-2 px-6 pt-12 pb-6">
        <Film className="h-8 w-8 text-primary" />
        <span className="text-2xl font-bold tracking-tight text-foreground">FilmSlate</span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-bold text-foreground">Create your account</h1>
          <p className="text-sm text-muted-foreground">
            Save your preferences and start streaming
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name Field */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-14 rounded-xl border-border bg-card pl-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-14 rounded-xl border-border bg-card pl-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password (min 6 characters)"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="h-14 rounded-xl border-border bg-card pl-12 pr-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          {/* Terms */}
          <p className="mt-2 text-center text-xs text-muted-foreground">
            By signing up, you agree to our{" "}
            <span className="text-primary underline-offset-2 hover:underline cursor-pointer">Terms of Service</span>
            {" "}and{" "}
            <span className="text-primary underline-offset-2 hover:underline cursor-pointer">Privacy Policy</span>
          </p>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!isFormValid}
            className="mt-4 h-14 w-full rounded-xl bg-primary text-lg font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
          >
            Create Account
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm text-muted-foreground">or continue with</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Social Login */}
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-14 flex-1 rounded-xl border-border bg-card text-foreground hover:bg-secondary"
            onClick={onContinue}
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-14 flex-1 rounded-xl border-border bg-card text-foreground hover:bg-secondary"
            onClick={onContinue}
          >
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Apple
          </Button>
        </div>

        {/* Skip Option */}
        <button
          onClick={onSkip}
          className="mb-8 mt-6 text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Skip for now
        </button>
      </div>
    </div>
  )
}
