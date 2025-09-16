"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import styles from "./exam-management.module.css"

interface Exam {
  id: string
  title: string
  subject: string
  difficulty: string
  questions: number
  duration: number
  price: number
  isActive: boolean
  createdAt: string
}

export function ExamManagement() {
  const { t } = useTranslation()
  const [showCreateForm, setShowCreateForm] = useState(false)

  // Mock exam data
  const [exams, setExams] = useState<Exam[]>([
    {
      id: "1",
      title: "Web Development Fundamentals",
      subject: "Technology",
      difficulty: "Beginner",
      questions: 30,
      duration: 60,
      price: 0,
      isActive: true,
      createdAt: "2024-01-01",
    },
    {
      id: "2",
      title: "React.js Professional",
      subject: "Technology",
      difficulty: "Intermediate",
      questions: 45,
      duration: 90,
      price: 49,
      isActive: true,
      createdAt: "2024-01-02",
    },
    {
      id: "3",
      title: "Digital Marketing Strategy",
      subject: "Marketing",
      difficulty: "Intermediate",
      questions: 40,
      duration: 75,
      price: 39,
      isActive: false,
      createdAt: "2024-01-03",
    },
  ])

  const handleToggleActive = (examId: string) => {
    setExams((prev) => prev.map((exam) => (exam.id === examId ? { ...exam, isActive: !exam.isActive } : exam)))
  }

  const handleDeleteExam = (examId: string) => {
    if (confirm("Are you sure you want to delete this exam?")) {
      setExams((prev) => prev.filter((exam) => exam.id !== examId))
    }
  }

  return (
    <div className={styles.examManagement}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t("admin.manageExams")}</h2>
        <button onClick={() => setShowCreateForm(true)} className={styles.createButton}>
          {t("admin.createExam")}
        </button>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>{exams.length}</div>
          <div className={styles.statLabel}>Total Exams</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{exams.filter((e) => e.isActive).length}</div>
          <div className={styles.statLabel}>Active</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{exams.filter((e) => !e.isActive).length}</div>
          <div className={styles.statLabel}>Inactive</div>
        </div>
      </div>

      <div className={styles.examList}>
        {exams.map((exam, index) => (
          <motion.div
            key={exam.id}
            className={styles.examCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className={styles.examHeader}>
              <div className={styles.examInfo}>
                <h3 className={styles.examTitle}>{exam.title}</h3>
                <div className={styles.examMeta}>
                  <span className={styles.subject}>{exam.subject}</span>
                  <span className={styles.difficulty}>{exam.difficulty}</span>
                  <span className={`${styles.status} ${exam.isActive ? styles.active : styles.inactive}`}>
                    {exam.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
              <div className={styles.examPrice}>${exam.price}</div>
            </div>

            <div className={styles.examDetails}>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Questions:</span>
                <span className={styles.detailValue}>{exam.questions}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Duration:</span>
                <span className={styles.detailValue}>{exam.duration} min</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Created:</span>
                <span className={styles.detailValue}>{new Date(exam.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className={styles.examActions}>
              <button className={styles.editButton}>{t("admin.editExam")}</button>
              <button
                onClick={() => handleToggleActive(exam.id)}
                className={`${styles.toggleButton} ${exam.isActive ? styles.deactivate : styles.activate}`}
              >
                {exam.isActive ? "Deactivate" : "Activate"}
              </button>
              <button onClick={() => handleDeleteExam(exam.id)} className={styles.deleteButton}>
                {t("admin.deleteExam")}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {showCreateForm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>Create New Exam</h3>
              <button onClick={() => setShowCreateForm(false)} className={styles.closeButton}>
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <p>Exam creation form would go here...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
