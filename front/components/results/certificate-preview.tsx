"use client"

import { motion } from "framer-motion"
import styles from "./certificate-preview.module.css"

interface CertificatePreviewProps {
  certificateId: string
  examTitle: string
  score: number
  completedAt: string
}

export function CertificatePreview({ certificateId, examTitle, score, completedAt }: CertificatePreviewProps) {
  return (
    <motion.div className={styles.certificate} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <div className={styles.certificateHeader}>
        <h3 className={styles.certificateTitle}>Certificate of Completion</h3>
        <div className={styles.certificateId}>ID: {certificateId}</div>
      </div>

      <div className={styles.certificateBody}>
        <p className={styles.certificationText}>This certifies that</p>
        <h4 className={styles.holderName}>John Doe</h4>
        <p className={styles.certificationText}>has successfully completed</p>
        <h4 className={styles.examName}>{examTitle}</h4>
        <p className={styles.scoreText}>with a score of {score}%</p>
      </div>

      <div className={styles.certificateFooter}>
        <div className={styles.qrCode}>
          <div className={styles.qrPattern}></div>
        </div>
        <div className={styles.signature}>
          <p className={styles.signatureText}>Verified Certificate</p>
          <p className={styles.dateText}>{new Date(completedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </motion.div>
  )
}
