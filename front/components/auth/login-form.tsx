"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./login-form.module.css"

export function LoginForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Login data:", formData)
    setIsSubmitting(false)
    // Redirect to dashboard
  }

  const isFormValid = formData.email && formData.password

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
          value={formData.email}
          onChange={handleInputChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}>
          {t("auth.password")}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.forgotPassword}>
        <Link href="/reset-password" className={styles.link}>
          {t("auth.forgotPassword")}
        </Link>
      </div>

      <motion.button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className={`${styles.submitButton} ${!isFormValid ? styles.disabled : ""}`}
        whileHover={isFormValid ? { scale: 1.02 } : {}}
        whileTap={isFormValid ? { scale: 0.98 } : {}}
      >
        {isSubmitting ? t("common.loading") : t("auth.login")}
      </motion.button>
    </form>
  )
}
