"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import styles from "./footer.module.css"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>CertifyPro</h3>
            <p>Professional certification platform for career advancement</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Platform</h4>
            <div className={styles.footerLinks}>
              <Link href="/about">{t("footer.about")}</Link>
              <Link href="/privacy">{t("footer.privacy")}</Link>
              <Link href="/terms">{t("footer.terms")}</Link>
              <Link href="/contact">{t("footer.contact")}</Link>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 CertifyPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
