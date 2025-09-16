"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Link from "next/link"
import { PerformanceChart } from "./performance-chart"
import { CertificatePreview } from "./certificate-preview"
import styles from "./results-display.module.css"

interface ResultData {
  score: number
  passed: boolean
  autoSubmit: boolean
  examTitle: string
  totalQuestions: number
  correctAnswers: number
  completedAt: string
  certificateId?: string
}

interface ResultsDisplayProps {
  result: ResultData
}

export function ResultsDisplay({ result }: ResultsDisplayProps) {
  const { t } = useTranslation()

  return (
    <div className={styles.resultsContainer}>
      {result.autoSubmit && (
        <motion.div
          className={styles.autoSubmitNotice}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>{t("exam.autoSubmit")}</p>
        </motion.div>
      )}

      <motion.div
        className={styles.scoreSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className={`${styles.scoreCard} ${result.passed ? styles.passed : styles.failed}`}>
          <div className={styles.scoreHeader}>
            <div className={styles.scoreIcon}>{result.passed ? "🎉" : "😔"}</div>
            <h1 className={styles.scoreTitle}>{result.passed ? t("results.passed") : t("results.failed")}</h1>
          </div>

          <div className={styles.scoreDisplay}>
            <div className={styles.scoreValue}>{result.score}%</div>
            <div className={styles.scoreDetails}>
              {result.correctAnswers} out of {result.totalQuestions} questions correct
            </div>
          </div>

          <div className={styles.examInfo}>
            <h2 className={styles.examTitle}>{result.examTitle}</h2>
            <p className={styles.completedAt}>Completed on {new Date(result.completedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </motion.div>

      <div className={styles.contentGrid}>
        <motion.div
          className={styles.chartSection}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PerformanceChart
            score={result.score}
            correctAnswers={result.correctAnswers}
            totalQuestions={result.totalQuestions}
          />
        </motion.div>

        <motion.div
          className={styles.actionsSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {result.passed && result.certificateId ? (
            <div className={styles.certificateSection}>
              <h3 className={styles.sectionTitle}>Your Certificate</h3>
              <CertificatePreview
                certificateId={result.certificateId}
                examTitle={result.examTitle}
                score={result.score}
                completedAt={result.completedAt}
              />
              <div className={styles.certificateActions}>
                <Link href={`/certificate/${result.certificateId}`} className={styles.viewButton}>
                  {t("results.viewCertificate")}
                </Link>
                <button className={styles.downloadButton}>{t("results.downloadCertificate")}</button>
              </div>
            </div>
          ) : (
            <div className={styles.retakeSection}>
              <h3 className={styles.sectionTitle}>Try Again</h3>
              <p className={styles.retakeMessage}>
                Don't worry! You can retake the exam to improve your score and earn your certificate.
              </p>
              <Link
                href={`/exam/${result.examTitle.toLowerCase().replace(/\s+/g, "-")}`}
                className={styles.retakeButton}
              >
                {t("results.retakeExam")}
              </Link>
            </div>
          )}

          <div className={styles.navigationActions}>
            <Link href="/dashboard" className={styles.dashboardButton}>
              Back to Dashboard
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
