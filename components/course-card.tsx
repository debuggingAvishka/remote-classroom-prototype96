import Link from "next/link"
import { courses, type Course } from "@/lib/courses"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">{course.name}</CardTitle>
        <CardDescription>{course.level}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <img
          src={course.thumbnail || "/placeholder.svg?height=160&width=320&query=course%20thumbnail"}
          alt={`${course.name} thumbnail`}
          className="h-40 w-full rounded object-cover"
        />
        <p className="text-sm text-muted-foreground">{course.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/courses/${course.slug}`}>Go to Course</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function CourseGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((c) => (
        <CourseCard key={c.id} course={c} />
      ))}
    </div>
  )
}
