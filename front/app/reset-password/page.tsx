"use client"

import { ResetPasswordForm } from "@/components/auth/reset-password-form"
import { motion } from "framer-motion"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import styles from "./reset-password.module.css"

export default function ResetPasswordPage() {
  const { t } = useTranslation()

  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.formWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <h1 className={styles.title}>{t("auth.resetPassword")}</h1>
            <p className={styles.subtitle}>Enter your email address and we'll send you a reset link</p>
          </div>

          <ResetPasswordForm />

          <div className={styles.footer}>
            <Link href="/login" className={styles.link}>
              {t("auth.backToLogin")}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
