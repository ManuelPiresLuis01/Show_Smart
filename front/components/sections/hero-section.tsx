"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./hero-section.module.css"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.heroTitle}>{t("hero.title")}</h1>
          <p className={styles.heroSubtitle}>{t("hero.subtitle")}</p>
          <div className={styles.heroActions}>
            <Link href="/register" className="btn btn-primary">
              {t("hero.cta")}
            </Link>
            <Link href="/verify" className="btn btn-secondary">
              {t("nav.verify")}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.certificatePreview}>
            <div className={styles.certificate}>
              <div className={styles.certificateHeader}>
                <h3>Certificate of Completion</h3>
              </div>
              <div className={styles.certificateBody}>
                <p>This certifies that</p>
                <h4>John Doe</h4>
                <p>has successfully completed</p>
                <h4>Web Development Fundamentals</h4>
                <div className={styles.certificateFooter}>
                  <div className={styles.qrCode}></div>
                  <div className={styles.signature}>
                    <p>Verified Certificate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
