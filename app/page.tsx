import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <section className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Remote Classroom for Rural Colleges
          </h1>
          <p className="mt-3 text-pretty text-muted-foreground">
            Bringing expert instruction to every campus – even on low bandwidth.
          </p>
          <p className="mt-3 text-pretty text-muted-foreground">
            Many diploma colleges lack subject lecturers in areas like AI, VLSI, and Renewable Energy. Students often
            rely on self-study or travel long distances to access quality teaching. This platform brings expert lectures
            to their phones, works even on weak internet, and helps bridge the urban–rural education gap.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
          <div className="mt-10 rounded-lg border bg-muted/30 p-4">
            <img
              src="/students-studying-remotely-illustration.png"
              alt="Students learning remotely illustration"
              className="mx-auto h-48 w-full max-w-3xl rounded object-cover"
            />
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-3xl">
          <ul className="list-inside list-disc space-y-2 text-pretty text-sm md:text-base">
            <li>
              <span className="font-medium">Low Bandwidth Friendly:</span> Clear audio + compressed visuals that work
              even on unstable networks.
            </li>
            <li>
              <span className="font-medium">Learn Anywhere:</span> Works smoothly on entry-level smartphones.
            </li>
            <li>
              <span className="font-medium">Teacher Friendly:</span> Faculty can deliver lectures easily from any quiet
              space.
            </li>
            <li>
              <span className="font-medium">No Missed Learning:</span> Recordings are auto-available in small sizes for
              easy download on limited data.
            </li>
            <li>
              <span className="font-medium">Interactive Learning:</span> Quizzes, polls, and discussion boards that
              still work at low speeds.
            </li>
            <li>
              <span className="font-medium">Financially Sustainable:</span> No special equipment or costly licenses
              required.
            </li>
          </ul>
        </section>

        <section className="mx-auto mt-10 max-w-3xl">
          <p className="text-pretty text-muted-foreground">
            Rural diploma colleges often lack specialized lecturers. Many students struggle due to poor internet and
            limited resources. This platform is designed for low bandwidth, focusing on clear audio, compressed visuals,
            and offline-ready content. By combining live engagement with downloadable resources, we ensure every student
            continues learning without interruptions.
          </p>
        </section>
      </main>
    </div>
  )
}
