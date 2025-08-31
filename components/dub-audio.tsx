"use client"
import React from "react"
import { useLanguage } from "./language-provider"

type Props = { transcriptByLang?: { en?: string; hi?: string } }

export function DubAudio({ transcriptByLang }: Props) {
  const { lang, t } = useLanguage()
  const [speaking, setSpeaking] = React.useState(false)

  const text = transcriptByLang?.[lang]

  React.useEffect(() => {
    // stop speaking on unmount or language change
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis?.cancel()
    }
  }, [lang])

  const onToggle = () => {
    if (!text) return
    const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined
    if (!synth) return

    if (speaking) {
      synth.cancel()
      setSpeaking(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    // Try to pick a voice matching the language
    const voices = synth.getVoices()
    const hint = lang === "hi" ? "hi" : "en"
    const voice = voices.find((v) => v.lang.toLowerCase().startsWith(hint))
    if (voice) utterance.voice = voice
    utterance.rate = 1.0
    utterance.pitch = 1.0
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)

    setSpeaking(true)
    synth.speak(utterance)
  }

  if (!text) {
    return (
      <p className="text-sm text-muted-foreground">
        {t("course.dub.unavailable", "Dubbed audio not available for this language.")}
      </p>
    )
  }

  return (
    <button type="button" onClick={onToggle} className="rounded-md border px-3 py-2 text-sm" aria-pressed={speaking}>
      {speaking ? t("course.dub.pause", "Pause dubbed audio") : t("course.dub.play", "Play dubbed audio")}
    </button>
  )
}
