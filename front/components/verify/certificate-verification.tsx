"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import styles from "./certificate-verification.module.css"

interface VerificationResult {
  isValid: boolean
  certificate?: {
    id: string
    holderName: string
    examTitle: string
    score: number
    completedAt: string
    issuedAt: string
  }
}

export function CertificateVerification() {
  const { t } = useTranslation()
  const [certificateId, setCertificateId] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null)

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!certificateId.trim()) return

    setIsVerifying(true)
    setVerificationResult(null)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock verification result
    const isValid = certificateId.startsWith("CERT-")
    const result: VerificationResult = {
      isValid,
      certificate: isValid
        ? {
            id: certificateId,
            holderName: "John Doe",
            examTitle: "Web Development Fundamentals",
            score: 85,
            completedAt: "2024-01-15T10:30:00Z",
            issuedAt: "2024-01-15T10:35:00Z",
          }
        : undefined,
    }

    setVerificationResult(result)
    setIsVerifying(false)
  }

  return (
    <div className={styles.verificationContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t("verify.title")}</h1>
        <p className={styles.subtitle}>{t("verify.subtitle")}</p>
      </div>

      <form onSubmit={handleVerify} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="certificateId" className={styles.label}>
            {t("verify.certificateId")}
          </label>
          <input
            type="text"
            id="certificateId"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
            placeholder="CERT-WDF-2024-001"
            className={styles.input}
            required
          />
        </div>

        <motion.button
          type="submit"
          disabled={!certificateId.trim() || isVerifying}
          className={`${styles.verifyButton} ${!certificateId.trim() ? styles.disabled : ""}`}
          whileHover={certificateId.trim() ? { scale: 1.02 } : {}}
          whileTap={certificateId.trim() ? { scale: 0.98 } : {}}
        >
          {isVerifying ? t("common.loading") : t("verify.verify")}
        </motion.button>
      </form>

      {verificationResult && (
        <motion.div
          className={styles.result}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={`${styles.resultCard} ${verificationResult.isValid ? styles.valid : styles.invalid}`}>
            <div className={styles.resultHeader}>
              <div className={styles.resultIcon}>{verificationResult.isValid ? "✓" : "✗"}</div>
              <h2 className={styles.resultTitle}>
                {verificationResult.isValid ? t("verify.valid") : t("verify.invalid")}
              </h2>
            </div>

            {verificationResult.isValid && verificationResult.certificate && (
              <div className={styles.certificateInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>{t("verify.holder")}:</span>
                  <span className={styles.infoValue}>{verificationResult.certificate.holderName}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>{t("verify.exam")}:</span>
                  <span className={styles.infoValue}>{verificationResult.certificate.examTitle}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>{t("verify.score")}:</span>
                  <span className={styles.infoValue}>{verificationResult.certificate.score}%</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>{t("verify.date")}:</span>
                  <span className={styles.infoValue}>
                    {new Date(verificationResult.certificate.issuedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            )}

            {!verificationResult.isValid && (
              <div className={styles.errorMessage}>
                <p>The certificate ID you entered could not be found or is invalid.</p>
                <p>Please check the ID and try again.</p>
              </div>
            )}
          </div>
        </motion.div>
      )}

      <div className={styles.info}>
        <h3 className={styles.infoTitle}>How to verify a certificate</h3>
        <ul className={styles.infoList}>
          <li>Enter the certificate ID exactly as it appears on the certificate</li>
          <li>Certificate IDs are case-sensitive and must include all characters</li>
          <li>You can also scan the QR code on the certificate to verify automatically</li>
          <li>Valid certificates will show the holder's name, exam details, and issue date</li>
        </ul>
      </div>
    </div>
  )
}
