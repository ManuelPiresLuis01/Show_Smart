"use client"

import { motion } from "framer-motion"
import styles from "./question-display.module.css"

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
}

interface QuestionDisplayProps {
  question: Question
  selectedAnswer?: number
  onAnswerSelect: (answerIndex: number) => void
}

export function QuestionDisplay({ question, selectedAnswer, onAnswerSelect }: QuestionDisplayProps) {
  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionText}>
        <h2>{question.question}</h2>
      </div>

      <div className={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onAnswerSelect(index)}
            className={`${styles.optionButton} ${selectedAnswer === index ? styles.selected : ""}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.optionLetter}>{String.fromCharCode(65 + index)}</div>
            <div className={styles.optionText}>{option}</div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
