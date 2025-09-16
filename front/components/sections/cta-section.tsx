"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./cta-section.module.css"

export function CTASection() {
  const { t } = useTranslation()

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Ready to Get Certified?</h2>
          <p className={styles.subtitle}>
            Join thousands of professionals who have advanced their careers with our certifications.
          </p>
          <div className={styles.actions}>
            <Link href="/register" className="btn btn-primary">
              {t("hero.cta")}
            </Link>
            <Link href="/exams" className="btn btn-secondary">
              Browse Exams
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
