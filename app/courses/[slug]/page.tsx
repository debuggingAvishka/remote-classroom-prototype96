"use client"

import { useMemo } from "react"
import { notFound, useParams, useRouter } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { courses } from "@/lib/courses"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const materials = [
  { name: "Lesson Notes (PDF)", href: "#" },
  { name: "Practice Worksheet (PDF)", href: "#" },
  { name: "Answer Key (PDF)", href: "#" },
]

export default function CourseDetailPage() {
  const params = useParams<{ slug: string }>()
  const router = useRouter()
  const course = useMemo(() => courses.find((c) => c.slug === params.slug), [params.slug])

  if (!course) return notFound()

  const handleOffline = () => {
    alert("Lesson saved for offline use (simulation)")
  }

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">{course.name}</h1>
          <p className="text-sm text-muted-foreground">{course.description}</p>
        </div>

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Lesson Video</CardTitle>
              <CardDescription>Watch the current lesson</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="aspect-video w-full overflow-hidden rounded border">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${course.youtubeId}?rel=0`}
                  title="Course video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center gap-3">
                <Button onClick={() => router.push("/quiz")}>Take Quiz</Button>
                <Button variant="outline" onClick={handleOffline}>
                  Download for Offline
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study Materials</CardTitle>
              <CardDescription>Downloadable resources</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2 text-sm">
                {materials.map((m) => (
                  <li key={m.name}>
                    <a href={m.href} className="text-blue-600 underline-offset-2 hover:underline">
                      {m.name}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
