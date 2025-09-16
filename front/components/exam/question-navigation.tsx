"use client"

import styles from "./question-navigation.module.css"

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
}

interface QuestionNavigationProps {
  questions: Question[]
  currentQuestionIndex: number
  answers: { [key: string]: number }
  onQuestionSelect: (index: number) => void
}

export function QuestionNavigation({
  questions,
  currentQuestionIndex,
  answers,
  onQuestionSelect,
}: QuestionNavigationProps) {
  return (
    <div className={styles.navigation}>
      <h3 className={styles.title}>Questions</h3>
      <div className={styles.questionGrid}>
        {questions.map((question, index) => {
          const isAnswered = answers[question.id] !== undefined
          const isCurrent = index === currentQuestionIndex

          return (
            <button
              key={question.id}
              onClick={() => onQuestionSelect(index)}
              className={`${styles.questionButton} ${isCurrent ? styles.current : ""} ${
                isAnswered ? styles.answered : ""
              }`}
            >
              {index + 1}
            </button>
          )
        })}
      </div>
    </div>
  )
}
