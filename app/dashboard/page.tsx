import { SiteHeader } from "@/components/site-header"
import { CourseGrid } from "@/components/course-card"

export default function DashboardPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Student Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Continue learning, even with low internet. All your materials are available offline too.
        </p>
        <div className="mt-6">
          <CourseGrid />
        </div>
      </main>
    </div>
  )
}
