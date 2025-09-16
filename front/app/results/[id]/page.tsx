"use client"

import { ResultsDisplay } from "@/components/results/results-display"
import { motion } from "framer-motion"
import { useParams, useSearchParams } from "next/navigation"
import styles from "./results.module.css"

export default function ResultsPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const examId = params.id as string
  const score = Number.parseInt(searchParams.get("score") || "0")
  const autoSubmit = searchParams.get("autoSubmit") === "true"

  // Mock exam data - in real app this would be fetched
  const examData = {
    id: examId,
    title: "Web Development Fundamentals",
    passingScore: 70,
    totalQuestions: 5,
    correctAnswers: Math.round((score / 100) * 5),
  }

  const resultData = {
    score,
    passed: score >= examData.passingScore,
    autoSubmit,
    examTitle: examData.title,
    totalQuestions: examData.totalQuestions,
    correctAnswers: examData.correctAnswers,
    completedAt: new Date().toISOString(),
    certificateId: score >= examData.passingScore ? `CERT-${examId.toUpperCase()}-${Date.now()}` : undefined,
  }

  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <ResultsDisplay result={resultData} />
        </motion.div>
      </div>
    </div>
  )
}
