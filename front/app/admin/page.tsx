"use client"

import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { motion } from "framer-motion"
import styles from "./admin.module.css"

export default function AdminPage() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <AdminDashboard />
        </motion.div>
      </div>
    </div>
  )
}
