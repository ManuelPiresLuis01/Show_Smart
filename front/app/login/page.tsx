"use client"

import { LoginForm } from "@/components/auth/login-form"
import { motion } from "framer-motion"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import styles from "./login.module.css"

export default function LoginPage() {
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
            <h1 className={styles.title}>{t("auth.login")}</h1>
            <p className={styles.subtitle}>{t("auth.greetings")}</p>
          </div>

          <LoginForm />

          <div className={styles.footer}>
            <p>
                {t("auth.dontAccount")}{" "}
              <Link href="/register" className={styles.link}>
                {t("auth.register")}
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
