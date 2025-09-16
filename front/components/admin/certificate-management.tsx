"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import styles from "./certificate-management.module.css"

interface Certificate {
  id: string
  holderName: string
  examTitle: string
  score: number
  issuedAt: string
  isValid: boolean
}

export function CertificateManagement() {
  const { t } = useTranslation()

  // Mock certificate data
  const [certificates] = useState<Certificate[]>([
    {
      id: "CERT-WDF-2024-001",
      holderName: "John Doe",
      examTitle: "Web Development Fundamentals",
      score: 85,
      issuedAt: "2024-01-15",
      isValid: true,
    },
    {
      id: "CERT-DMS-2024-002",
      holderName: "Jane Smith",
      examTitle: "Digital Marketing Strategy",
      score: 92,
      issuedAt: "2024-01-10",
      isValid: true,
    },
    {
      id: "CERT-RJS-2024-003",
      holderName: "Bob Johnson",
      examTitle: "React.js Professional",
      score: 78,
      issuedAt: "2024-01-05",
      isValid: false,
    },
  ])

  return (
    <div className={styles.certificateManagement}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t("admin.manageCertificates")}</h2>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>{certificates.length}</div>
          <div className={styles.statLabel}>Total Certificates</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{certificates.filter((c) => c.isValid).length}</div>
          <div className={styles.statLabel}>Valid</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{certificates.filter((c) => !c.isValid).length}</div>
          <div className={styles.statLabel}>Revoked</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>
            {Math.round(certificates.reduce((sum, c) => sum + c.score, 0) / certificates.length)}%
          </div>
          <div className={styles.statLabel}>Avg Score</div>
        </div>
      </div>

      <div className={styles.certificateList}>
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            className={styles.certificateCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className={styles.certificateHeader}>
              <div className={styles.certificateInfo}>
                <h3 className={styles.certificateId}>{certificate.id}</h3>
                <div className={styles.certificateMeta}>
                  <span className={styles.holderName}>{certificate.holderName}</span>
                  <span className={`${styles.status} ${certificate.isValid ? styles.valid : styles.invalid}`}>
                    {certificate.isValid ? "Valid" : "Revoked"}
                  </span>
                </div>
              </div>
              <div className={styles.certificateScore}>{certificate.score}%</div>
            </div>

            <div className={styles.certificateDetails}>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Exam:</span>
                <span className={styles.detailValue}>{certificate.examTitle}</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>Issued:</span>
                <span className={styles.detailValue}>{new Date(certificate.issuedAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className={styles.certificateActions}>
              <button className={styles.viewButton}>View Certificate</button>
              <button className={styles.downloadButton}>Download PDF</button>
              <button className={`${styles.toggleButton} ${certificate.isValid ? styles.revoke : styles.restore}`}>
                {certificate.isValid ? "Revoke" : "Restore"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
