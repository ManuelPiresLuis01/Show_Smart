"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import styles from "./reset-password-form.module.css"

export function ResetPasswordForm() {
  const { t } = useTranslation()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Reset password for:", email)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}> {t("auth.checkEmail")}</h3>
        <p className={styles.successMessage}>
         {t("auth.ssendCode")} <strong>{email}</strong>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          {t("auth.email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
      </div>

      <motion.button
        type="submit"
        disabled={!email || isSubmitting}
        className={`${styles.submitButton} ${!email ? styles.disabled : ""}`}
        whileHover={email ? { scale: 1.02 } : {}}
        whileTap={email ? { scale: 0.98 } : {}}
      >
        {isSubmitting ? t("common.loading") : t("common.sendCode")}
      </motion.button>
    </form>
  )
}
