"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import styles from "./register-form.module.css"

export function RegisterForm() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    language: "en",
    acceptTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Registration data:", formData)
    setIsSubmitting(false)
    // Redirect to dashboard or login
  }

  const isFormValid = formData.fullName && formData.email && formData.password && formData.acceptTerms

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="fullName" className={styles.label}>
          {t("auth.fullName")}
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className={styles.input}
          required
        />
      </div>

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

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="dateOfBirth" className={styles.label}>
            {t("auth.dateOfBirth")}
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="gender" className={styles.label}>
            {t("auth.gender")}
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className={styles.select}
          >
            <option value="">Select...</option>
            <option value="male">{t("auth.gender.male")}</option>
            <option value="female">{t("auth.gender.female")}</option>
            <option value="other">{t("auth.gender.other")}</option>
          </select>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="language" className={styles.label}>
          {t("auth.language")}
        </label>
        <select
          id="language"
          name="language"
          value={formData.language}
          onChange={handleInputChange}
          className={styles.select}
        >
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
      </div>

      <div className={styles.checkboxGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleInputChange}
            className={styles.checkbox}
          />
          <span className={styles.checkboxText}>{t("auth.terms")}</span>
        </label>
      </div>

      <motion.button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className={`${styles.submitButton} ${!isFormValid ? styles.disabled : ""}`}
        whileHover={isFormValid ? { scale: 1.02 } : {}}
        whileTap={isFormValid ? { scale: 0.98 } : {}}
      >
        {isSubmitting ? t("common.loading") : t("auth.register")}
      </motion.button>
    </form>
  )
}
