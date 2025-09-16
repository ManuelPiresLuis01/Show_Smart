"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./my-results.module.css"

interface ExamResult {
  id: string
  examTitle: string
  score: number
  passed: boolean
  completedAt: string
  certificateId?: string
}

export function MyResults() {
  const { t } = useTranslation()

  // Mock results data
  const results: ExamResult[] = [
    {
      id: "1",
      examTitle: "Web Development Fundamentals",
      score: 85,
      passed: true,
      completedAt: "2024-01-15",
      certificateId: "CERT-WDF-2024-001",
    },
    {
      id: "2",
      examTitle: "Digital Marketing Strategy",
      score: 92,
      passed: true,
      completedAt: "2024-01-10",
      certificateId: "CERT-DMS-2024-002",
    },
    {
      id: "3",
      examTitle: "React.js Professional",
      score: 68,
      passed: false,
      completedAt: "2024-01-05",
    },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{t("dashboard.myResults")}</h2>

      {results.length === 0 ? (
        <div className={styles.empty}>
          <p>No exam results yet. Take your first exam to see results here!</p>
        </div>
      ) : (
        <div className={styles.resultsList}>
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              className={styles.resultCard}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.resultHeader}>
                <h3 className={styles.examTitle}>{result.examTitle}</h3>
                <div className={`${styles.score} ${result.passed ? styles.passed : styles.failed}`}>
                  {result.score}%
                </div>
              </div>

              <div className={styles.resultMeta}>
                <span className={styles.date}>{formatDate(result.completedAt)}</span>
                <span className={`${styles.status} ${result.passed ? styles.passed : styles.failed}`}>
                  {result.passed ? "Passed" : "Failed"}
                </span>
              </div>

              {result.passed && result.certificateId && (
                <div className={styles.actions}>
                  <Link href={`/certificate/${result.certificateId}`} className={styles.certificateButton}>
                    {t("dashboard.viewCertificate")}
                  </Link>
                </div>
              )}

              {!result.passed && (
                <div className={styles.actions}>
                  <Link href={`/exam/${result.id}`} className={styles.retakeButton}>
                    Retake Exam
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
