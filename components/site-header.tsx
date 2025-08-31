"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/language-provider"

const navItems = [
  { href: "/", key: "home" as const },
  { href: "/dashboard", key: "dashboard" as const },
  { href: "/courses", key: "courses" as const },
  { href: "/quiz", key: "quiz" as const },
  { href: "/support", key: "support" as const },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { dict } = useLanguage()

  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-blue-600">
          <span className="sr-only">{dict.nav.home}</span>
          {dict.siteTitle}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-2">
          {navItems.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted",
                  active && "bg-muted font-medium",
                )}
              >
                {dict.nav[l.key]}
              </Link>
            )
          })}
          <Button asChild variant="outline" className="ml-2 bg-transparent">
            <Link href="/auth">{dict.authLogin}</Link>
          </Button>
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
