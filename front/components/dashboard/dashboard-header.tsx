"use client"

import { useTranslation } from "react-i18next"
import styles from "./dashboard-header.module.css"

interface DashboardHeaderProps {
  user: {
    name: string
    email: string
  }
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  const { t } = useTranslation()

  return (
    <div className={styles.header}>
      <div className={styles.welcome}>
        <h1 className={styles.title}>{t("dashboard.welcome", { name: user.name })}</h1>
        <p className={styles.subtitle}>Ready to advance your career with new certifications?</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>12</div>
          <div className={styles.statLabel}>Available Exams</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>3</div>
          <div className={styles.statLabel}>Completed</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>2</div>
          <div className={styles.statLabel}>Certificates</div>
        </div>
      </div>
    </div>
  )
}
