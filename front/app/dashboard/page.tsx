"use client"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { AvailableExams } from "@/components/dashboard/available-exams"
import { MyResults } from "@/components/dashboard/my-results"
import { motion } from "framer-motion"
import styles from "./dashboard.module.css"

export default function DashboardPage() {
  // Mock user data - in real app this would come from auth context
  const user = {
    name: "John Doe",
    email: "john@example.com",
  }

  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <DashboardHeader user={user} />
        </motion.div>

        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AvailableExams />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MyResults />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
