"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const LABELS: Record<"en" | "hi", string> = {
  en: "English",
  hi: "हिन्दी",
}

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" aria-label={t("language")} title={t("language")}>
          {LABELS[lang]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setLang("en")} aria-checked={lang === "en"} role="menuitemradio">
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("hi")} aria-checked={lang === "hi"} role="menuitemradio">
          हिन्दी
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
