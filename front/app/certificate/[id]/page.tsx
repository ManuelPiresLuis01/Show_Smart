"use client"

import { CertificateView } from "@/components/certificate/certificate-view"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import styles from "./certificate.module.css"

export default function CertificatePage() {
  const params = useParams()
  const certificateId = params.id as string

  // Mock certificate data - in real app this would be fetched
  const certificateData = {
    id: certificateId,
    holderName: "John Doe",
    examTitle: "Web Development Fundamentals",
    score: 85,
    completedAt: "2024-01-15T10:30:00Z",
    issuedAt: "2024-01-15T10:35:00Z",
    isValid: true,
  }

  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <CertificateView certificate={certificateData} />
        </motion.div>
      </div>
    </div>
  )
}
