"use client"

import { useState, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ExamTimer } from "./exam-timer"
import { QuestionNavigation } from "./question-navigation"
import { QuestionDisplay } from "./question-display"
import styles from "./exam-interface.module.css"

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
}

interface Exam {
  id: string
  title: string
  duration: number // minutes
  questions: Question[]
}

interface ExamInterfaceProps {
  exam: Exam
}

export function ExamInterface({ exam }: ExamInterfaceProps) {
  const { t } = useTranslation()
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: number }>({})
  const [timeRemaining, setTimeRemaining] = useState(exam.duration * 60) // convert to seconds
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleTimeUp = useCallback(() => {
    console.log("Time's up! Auto-submitting exam...")
    submitExam(true)
  }, [])

  const submitExam = async (autoSubmit = false) => {
    setIsSubmitting(true)

    // Calculate score
    let correctAnswers = 0
    exam.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++
      }
    })

    const score = Math.round((correctAnswers / exam.questions.length) * 100)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to results page with score
    router.push(`/results/${exam.id}?score=${score}&autoSubmit=${autoSubmit}`)
  }

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }))
  }

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index)
  }

  const goToNextQuestion = () => {
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const currentQuestion = exam.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === exam.questions.length - 1
  const answeredQuestions = Object.keys(answers).length
  const allQuestionsAnswered = answeredQuestions === exam.questions.length

  return (
    <div className={styles.examContainer}>
      <div className={styles.examHeader}>
        <div className={styles.examInfo}>
          <h1 className={styles.examTitle}>{exam.title}</h1>
          <p className={styles.progress}>
            {t("exam.question", { current: currentQuestionIndex + 1, total: exam.questions.length })}
          </p>
        </div>
        <ExamTimer timeRemaining={timeRemaining} onTimeUp={handleTimeUp} />
      </div>

      <div className={styles.examContent}>
        <div className={styles.questionSection}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <QuestionDisplay
                question={currentQuestion}
                selectedAnswer={answers[currentQuestion.id]}
                onAnswerSelect={(answerIndex) => handleAnswerSelect(currentQuestion.id, answerIndex)}
              />
            </motion.div>
          </AnimatePresence>

          <div className={styles.navigationButtons}>
            <button
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className={`${styles.navButton} ${styles.prevButton}`}
            >
              {t("exam.previous")}
            </button>

            {isLastQuestion ? (
              <button
                onClick={() => submitExam()}
                disabled={isSubmitting}
                className={`${styles.navButton} ${styles.submitButton} ${!allQuestionsAnswered ? styles.warning : ""}`}
              >
                {isSubmitting ? t("common.loading") : t("exam.submit")}
              </button>
            ) : (
              <button onClick={goToNextQuestion} className={`${styles.navButton} ${styles.nextButton}`}>
                {t("exam.next")}
              </button>
            )}
          </div>
        </div>

        <div className={styles.sidebar}>
          <QuestionNavigation
            questions={exam.questions}
            currentQuestionIndex={currentQuestionIndex}
            answers={answers}
            onQuestionSelect={goToQuestion}
          />

          <div className={styles.examStats}>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Answered:</span>
              <span className={styles.statValue}>
                {answeredQuestions}/{exam.questions.length}
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Remaining:</span>
              <span className={styles.statValue}>{exam.questions.length - answeredQuestions}</span>
            </div>
          </div>

          {!allQuestionsAnswered && (
            <div className={styles.warning}>
              <p>Please answer all questions before submitting.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
