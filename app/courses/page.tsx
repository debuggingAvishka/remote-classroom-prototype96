import { SiteHeader } from "@/components/site-header"
import { CourseGrid } from "@/components/course-card"

export default function CoursesPage() {
  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Courses</h1>
        <p className="mt-1 text-sm text-muted-foreground">Browse available courses and start learning.</p>
        <div className="mt-6">
          <CourseGrid />
        </div>
      </main>
    </div>
  )
}
