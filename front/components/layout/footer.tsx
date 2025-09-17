"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import styles from "./footer.module.css"
import Logo from "../ui/logo"

export function Footer() {
  const { t } = useTranslation()
  const date = new Date();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <Logo/>
            <p>{t("footer.explain")}</p>
          </div>

          <div className={styles.footerSection}>
            <h4>{t("footer.title")}</h4>
            <div className={styles.footerLinks}>
              <Link href="/about">{t("footer.about")}</Link>
              <Link href="/privacy">{t("footer.privacy")}</Link>
              <Link href="/terms">{t("footer.terms")}</Link>
              <Link href="/contact">{t("footer.contact")}</Link>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {date.getFullYear()} <b>ShowSmart</b>. <br/>{t("footer.copyright")}.</p>
        </div>
      </div>
    </footer>
  )
}
