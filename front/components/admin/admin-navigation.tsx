"use client"

import { useTranslation } from "react-i18next"
import styles from "./admin-navigation.module.css"

type AdminSection = "exams" | "users" | "certificates"

interface AdminNavigationProps {
  activeSection: AdminSection
  onSectionChange: (section: AdminSection) => void
}

export function AdminNavigation({ activeSection, onSectionChange }: AdminNavigationProps) {
  const { t } = useTranslation()

  const navigationItems = [
    {
      id: "exams" as AdminSection,
      label: t("admin.manageExams"),
      icon: "📝",
    },
    {
      id: "users" as AdminSection,
      label: t("admin.manageUsers"),
      icon: "👥",
    },
    {
      id: "certificates" as AdminSection,
      label: t("admin.manageCertificates"),
      icon: "🏆",
    },
  ]

  return (
    <nav className={styles.navigation}>
      <h3 className={styles.navTitle}>Admin Menu</h3>
      <ul className={styles.navList}>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSectionChange(item.id)}
              className={`${styles.navItem} ${activeSection === item.id ? styles.active : ""}`}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
