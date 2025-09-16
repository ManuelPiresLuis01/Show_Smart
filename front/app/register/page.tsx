"use client"

import { RegisterForm } from "@/components/auth/register-form"
import { motion } from "framer-motion"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import styles from "./register.module.css"

export default function RegisterPage() {
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
            <h1 className={styles.title}>{t("auth.register")}</h1>
            <p className={styles.subtitle}>Create your account to start taking exams</p>
          </div>

          <RegisterForm />

          <div className={styles.footer}>
            <p>
              Already have an account?{" "}
              <Link href="/login" className={styles.link}>
                {t("auth.login")}
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
