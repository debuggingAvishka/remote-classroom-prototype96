export type Course = {
  id: string
  name: string
  slug: string
  description: string
  level: string
  thumbnail: string
  youtubeId?: string
}

export const courses: Course[] = [
  {
    id: "math10",
    name: "Mathematics – Class 10",
    slug: "mathematics-class-10",
    description: "Algebra, Geometry, and Trigonometry foundations.",
    level: "Class 10",
    thumbnail: "/mathematics-course-thumbnail.png",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: "eng8",
    name: "English – Class 8",
    slug: "english-class-8",
    description: "Grammar, comprehension, and creative writing.",
    level: "Class 8",
    thumbnail: "/english-course-thumbnail.png",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "sci9",
    name: "Science – Class 9",
    slug: "science-class-9",
    description: "Physics, Chemistry, and Biology basics.",
    level: "Class 9",
    thumbnail: "/science-course-thumbnail.png",
    youtubeId: "aqz-KE-bpKQ",
  },
]
