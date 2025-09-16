"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import styles from "./benefits-section.module.css"

export function BenefitsSection() {
  const { t } = useTranslation()

  const benefits = [
    {
      title: t("benefits.secure"),
      description: t("benefits.secure.desc"),
      icon: "🔒",
    },
    {
      title: t("benefits.instant"),
      description: t("benefits.instant.desc"),
      icon: "⚡",
    },
    {
      title: t("benefits.recognized"),
      description: t("benefits.recognized.desc"),
      icon: "🌟",
    },
  ]

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>{t("benefits.title")}</h2>
        </motion.div>

        <div className={styles.benefits}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className={styles.benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
