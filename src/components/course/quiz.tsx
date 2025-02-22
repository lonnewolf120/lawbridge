"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
}

interface QuizProps {
  questions: Question[]
}

export function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswer = () => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setQuizCompleted(true)
      }
    }
  }

  if (quizCompleted) {
    return (
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">Quiz Completed!</h3>
        <p className="text-lg">
          Your score: {score} out of {questions.length}
        </p>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Quiz</h3>
      <p className="font-medium">
        Question {currentQuestion + 1} of {questions.length}
      </p>
      <p>{question.text}</p>
      <RadioGroup onValueChange={(value) => setSelectedAnswer(Number.parseInt(value))}>
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={index.toString()} id={`option-${index}`} />
            <Label htmlFor={`option-${index}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
      <Button onClick={handleAnswer} disabled={selectedAnswer === null}>
        {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
      </Button>
    </div>
  )
}

