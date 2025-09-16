"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./certificate-view.module.css"

interface Certificate {
  id: string
  holderName: string
  examTitle: string
  score: number
  completedAt: string
  issuedAt: string
  isValid: boolean
}

interface CertificateViewProps {
  certificate: Certificate
}

export function CertificateView({ certificate }: CertificateViewProps) {
  const handleDownload = () => {
    // In a real app, this would generate and download a PDF
    console.log("Downloading certificate:", certificate.id)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className={styles.certificateContainer}>
      <div className={styles.actions}>
        <button onClick={handleDownload} className={styles.downloadButton}>
          Download PDF
        </button>
        <button onClick={handlePrint} className={styles.printButton}>
          Print
        </button>
        <Link href="/dashboard" className={styles.backButton}>
          Back to Dashboard
        </Link>
      </div>

      <motion.div
        className={styles.certificate}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.certificateHeader}>
          <div className={styles.logo}>CertifyPro</div>
          <h1 className={styles.certificateTitle}>Certificate of Completion</h1>
          <div className={styles.certificateId}>Certificate ID: {certificate.id}</div>
        </div>

        <div className={styles.certificateBody}>
          <div className={styles.certificationStatement}>
            <p className={styles.certificationText}>This is to certify that</p>
            <h2 className={styles.holderName}>{certificate.holderName}</h2>
            <p className={styles.certificationText}>has successfully completed the examination for</p>
            <h3 className={styles.examTitle}>{certificate.examTitle}</h3>
            <p className={styles.scoreStatement}>
              achieving a score of <span className={styles.score}>{certificate.score}%</span>
            </p>
          </div>

          <div className={styles.certificateDetails}>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Completed:</span>
              <span className={styles.detailValue}>{new Date(certificate.completedAt).toLocaleDateString()}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Issued:</span>
              <span className={styles.detailValue}>{new Date(certificate.issuedAt).toLocaleDateString()}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Status:</span>
              <span className={`${styles.detailValue} ${certificate.isValid ? styles.valid : styles.invalid}`}>
                {certificate.isValid ? "Valid" : "Invalid"}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.certificateFooter}>
          <div className={styles.qrSection}>
            <div className={styles.qrCode}>
              <div className={styles.qrPattern}></div>
            </div>
            <p className={styles.qrText}>Scan to verify</p>
          </div>

          <div className={styles.signature}>
            <div className={styles.signatureLine}></div>
            <p className={styles.signatureText}>Authorized Signature</p>
            <p className={styles.platformText}>CertifyPro Certification Platform</p>
          </div>
        </div>

        <div className={styles.verificationNote}>
          <p>
            This certificate can be verified at{" "}
            <Link href="/verify" className={styles.verifyLink}>
              certifypro.com/verify
            </Link>{" "}
            using certificate ID: {certificate.id}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
