"use client"

import { useTranslation } from "react-i18next"
import styles from "./admin-header.module.css"

export function AdminHeader() {
  const { t } = useTranslation()

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>{t("admin.title")}</h1>
        <p className={styles.subtitle}>Manage exams, users, and certificates</p>
      </div>

      <div className={styles.adminInfo}>
        <div className={styles.adminProfile}>
          <div className={styles.avatar}>A</div>
          <div className={styles.adminDetails}>
            <span className={styles.adminName}>Admin User</span>
            <span className={styles.adminRole}>Administrator</span>
          </div>
        </div>
      </div>
    </div>
  )
}
