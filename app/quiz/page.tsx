"use client"

import { useMemo, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

type Question = {
  id: string
  prompt: string
  options: { id: string; text: string }[]
  answerId: string
}

const QUESTIONS: Question[] = [
  {
    id: "q1",
    prompt: "What is 2 + 2?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "22" },
    ],
    answerId: "b",
  },
  {
    id: "q2",
    prompt: "Which of the following is a mammal?",
    options: [
      { id: "a", text: "Shark" },
      { id: "b", text: "Frog" },
      { id: "c", text: "Whale" },
      { id: "d", text: "Eagle" },
    ],
    answerId: "c",
  },
  {
    id: "q3",
    prompt: "Select the synonym of 'rapid':",
    options: [
      { id: "a", text: "Slow" },
      { id: "b", text: "Quick" },
      { id: "c", text: "Late" },
      { id: "d", text: "Calm" },
    ],
    answerId: "b",
  },
  {
    id: "q4",
    prompt: "The chemical symbol for water is:",
    options: [
      { id: "a", text: "O2" },
      { id: "b", text: "H2" },
      { id: "c", text: "CO2" },
      { id: "d", text: "H2O" },
    ],
    answerId: "d",
  },
  {
    id: "q5",
    prompt: "In a right triangle, the side opposite the right angle is called:",
    options: [
      { id: "a", text: "Hypotenuse" },
      { id: "b", text: "Adjacent" },
      { id: "c", text: "Opposite" },
      { id: "d", text: "Median" },
    ],
    answerId: "a",
  },
]

export default function QuizPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const score = useMemo(() => {
    let s = 0
    for (const q of QUESTIONS) {
      if (answers[q.id] === q.answerId) s++
    }
    return s
  }, [answers])

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const reset = () => {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Quiz</CardTitle>
            <CardDescription>Answer the questions and submit to see your score.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {QUESTIONS.map((q, idx) => (
              <section key={q.id} className="space-y-3">
                <h2 className="text-sm font-medium">
                  {idx + 1}. {q.prompt}
                </h2>
                <RadioGroup
                  value={answers[q.id] || ""}
                  onValueChange={(val) => setAnswers((prev) => ({ ...prev, [q.id]: val }))}
                  className="grid gap-2"
                >
                  {q.options.map((opt) => (
                    <div key={opt.id} className="flex items-center gap-2">
                      <RadioGroupItem id={`${q.id}-${opt.id}`} value={opt.id} />
                      <Label htmlFor={`${q.id}-${opt.id}`}>{opt.text}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </section>
            ))}
            <div className="flex items-center gap-3">
              <Button onClick={handleSubmit}>Submit</Button>
              <Button variant="outline" onClick={reset}>
                Reset
              </Button>
            </div>
            {submitted && (
              <div className="rounded-md border bg-muted p-3 text-sm">
                You scored {score}/{QUESTIONS.length}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
