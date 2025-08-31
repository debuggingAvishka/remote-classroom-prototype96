"use client"

import type React from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Language = "en" | "hi"

const STORAGE_KEY = "rc:lang"

// i18n dictionaries for visible UI elements
const DICT = {
  en: {
    siteTitle: "Remote Classroom",
    language: "Language",
    nav: {
      home: "Home",
      dashboard: "Dashboard",
      courses: "Courses",
      quiz: "Quiz",
      support: "Support",
    },
    authLogin: "Login / Sign Up",
  },
  hi: {
    siteTitle: "रिमोट क्लासरूम",
    language: "भाषा",
    nav: {
      home: "होम",
      dashboard: "डैशबोर्ड",
      courses: "पाठ्यक्रम",
      quiz: "क्विज़",
      support: "सहायता",
    },
    authLogin: "लॉगिन / साइन अप",
  },
} as const

type I18nDict = typeof DICT.en

type LanguageContextType = {
  lang: Language
  setLang: (l: Language) => void
  t: (k: keyof I18nDict) => string
  dict: I18nDict
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en")

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null
      if (saved === "en" || saved === "hi") setLangState(saved)
    } catch {
      // ignore
    }
  }, [])

  const setLang = (l: Language) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      // ignore
    }
  }

  const dict = useMemo<I18nDict>(() => DICT[lang], [lang])
  const t = (k: keyof I18nDict) => dict[k]

  const value = useMemo(() => ({ lang, setLang, t, dict }), [lang, dict])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
