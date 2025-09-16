"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import { motion } from "framer-motion"
import styles from "./available-exams.module.css"

interface Exam {
  id: string
  title: string
  subject: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  price: number
  duration: number
  questions: number
  description: string
}

export function AvailableExams() {
  const { t } = useTranslation()

  // Mock exam data
  const exams: Exam[] = [
    {
      id: "1",
      title: "Web Development Fundamentals",
      subject: "Technology",
      difficulty: "Beginner",
      price: 0,
      duration: 60,
      questions: 30,
      description: "Learn the basics of HTML, CSS, and JavaScript",
    },
    {
      id: "2",
      title: "React.js Professional",
      subject: "Technology",
      difficulty: "Intermediate",
      price: 49,
      duration: 90,
      questions: 45,
      description: "Master React.js concepts and best practices",
    },
    {
      id: "3",
      title: "Digital Marketing Strategy",
      subject: "Marketing",
      difficulty: "Intermediate",
      price: 39,
      duration: 75,
      questions: 40,
      description: "Comprehensive digital marketing strategies and tactics",
    },
    {
      id: "4",
      title: "Project Management Essentials",
      subject: "Management",
      difficulty: "Beginner",
      price: 29,
      duration: 60,
      questions: 35,
      description: "Core project management principles and methodologies",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return styles.beginner
      case "Intermediate":
        return styles.intermediate
      case "Advanced":
        return styles.advanced
      default:
        return ""
    }
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{t("dashboard.availableExams")}</h2>

      <div className={styles.examGrid}>
        {exams.map((exam, index) => (
          <motion.div
            key={exam.id}
            className={styles.examCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className={styles.examHeader}>
              <div className={styles.examMeta}>
                <span className={styles.subject}>{exam.subject}</span>
                <span className={`${styles.difficulty} ${getDifficultyColor(exam.difficulty)}`}>{exam.difficulty}</span>
              </div>
              <div className={styles.price}>
                {exam.price === 0 ? t("dashboard.free") : t("dashboard.price", { price: exam.price })}
              </div>
            </div>

            <h3 className={styles.examTitle}>{exam.title}</h3>
            <p className={styles.examDescription}>{exam.description}</p>

            <div className={styles.examDetails}>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Duration:</span>
                <span className={styles.detailValue}>{exam.duration} min</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Questions:</span>
                <span className={styles.detailValue}>{exam.questions}</span>
              </div>
            </div>

            <Link href={`/exam/${exam.id}`} className={styles.startButton}>
              {t("dashboard.startExam")}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
