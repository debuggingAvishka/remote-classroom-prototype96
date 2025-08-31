"use client"

import { useEffect, useState } from "react"
import type React from "react"
import { useRouter } from "next/navigation"

export function AuthRequired({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const authed = localStorage.getItem("rc_auth") === "true"
    if (!authed) {
      router.replace("/auth")
      return
    }
    setReady(true)
  }, [router])

  if (!ready) return null
  return <>{children}</>
}
