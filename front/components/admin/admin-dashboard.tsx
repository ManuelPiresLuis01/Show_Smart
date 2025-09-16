"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { AdminHeader } from "./admin-header"
import { AdminNavigation } from "./admin-navigation"
import { ExamManagement } from "./exam-management"
import { UserManagement } from "./user-management"
import { CertificateManagement } from "./certificate-management"
import styles from "./admin-dashboard.module.css"

type AdminSection = "exams" | "users" | "certificates"

export function AdminDashboard() {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState<AdminSection>("exams")

  const renderActiveSection = () => {
    switch (activeSection) {
      case "exams":
        return <ExamManagement />
      case "users":
        return <UserManagement />
      case "certificates":
        return <CertificateManagement />
      default:
        return <ExamManagement />
    }
  }

  return (
    <div className={styles.adminContainer}>
      <AdminHeader />

      <div className={styles.adminContent}>
        <div className={styles.sidebar}>
          <AdminNavigation activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>

        <div className={styles.mainContent}>
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderActiveSection()}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
