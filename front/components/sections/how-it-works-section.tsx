"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import styles from "./how-it-works-section.module.css"

export function HowItWorksSection() {
  const { t } = useTranslation()

  const steps = [
    {
      number: "01",
      title: t("steps.register"),
      description: t("steps.register.desc"),
      icon: "👤",
    },
    {
      number: "02",
      title: t("steps.exam"),
      description: t("steps.exam.desc"),
      icon: "📝",
    },
    {
      number: "03",
      title: t("steps.certificate"),
      description: t("steps.certificate.desc"),
      icon: "🏆",
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
          <h2 className={styles.title}>{t("steps.title")}</h2>
        </motion.div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
