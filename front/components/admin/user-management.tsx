"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import styles from "./user-management.module.css"

interface User {
  id: string
  name: string
  email: string
  registeredAt: string
  examsTaken: number
  certificatesEarned: number
  isActive: boolean
}

export function UserManagement() {
  const { t } = useTranslation()

  // Mock user data
  const [users] = useState<User[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      registeredAt: "2024-01-15",
      examsTaken: 3,
      certificatesEarned: 2,
      isActive: true,
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      registeredAt: "2024-01-10",
      examsTaken: 5,
      certificatesEarned: 4,
      isActive: true,
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      registeredAt: "2024-01-05",
      examsTaken: 1,
      certificatesEarned: 0,
      isActive: false,
    },
  ])

  return (
    <div className={styles.userManagement}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t("admin.manageUsers")}</h2>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>{users.length}</div>
          <div className={styles.statLabel}>Total Users</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{users.filter((u) => u.isActive).length}</div>
          <div className={styles.statLabel}>Active Users</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{users.reduce((sum, u) => sum + u.examsTaken, 0)}</div>
          <div className={styles.statLabel}>Total Exams Taken</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{users.reduce((sum, u) => sum + u.certificatesEarned, 0)}</div>
          <div className={styles.statLabel}>Certificates Issued</div>
        </div>
      </div>

      <div className={styles.userTable}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>User</div>
          <div className={styles.headerCell}>Email</div>
          <div className={styles.headerCell}>Registered</div>
          <div className={styles.headerCell}>Exams</div>
          <div className={styles.headerCell}>Certificates</div>
          <div className={styles.headerCell}>Status</div>
          <div className={styles.headerCell}>Actions</div>
        </div>

        {users.map((user, index) => (
          <motion.div
            key={user.id}
            className={styles.tableRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className={styles.userCell}>
              <div className={styles.userAvatar}>{user.name.charAt(0)}</div>
              <span className={styles.userName}>{user.name}</span>
            </div>
            <div className={styles.cell}>{user.email}</div>
            <div className={styles.cell}>{new Date(user.registeredAt).toLocaleDateString()}</div>
            <div className={styles.cell}>{user.examsTaken}</div>
            <div className={styles.cell}>{user.certificatesEarned}</div>
            <div className={styles.cell}>
              <span className={`${styles.status} ${user.isActive ? styles.active : styles.inactive}`}>
                {user.isActive ? "Active" : "Inactive"}
              </span>
            </div>
            <div className={styles.cell}>
              <div className={styles.actions}>
                <button className={styles.viewButton}>View</button>
                <button className={styles.editButton}>Edit</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
