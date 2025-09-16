"use client"

import { useTranslation } from "react-i18next"
import styles from "./language-switcher.module.css"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pt" : "en"
    i18n.changeLanguage(newLang)
  }

  return (
    <button onClick={toggleLanguage} className={styles.switcher} aria-label="Switch language">
      {i18n.language === "en" ? "PT" : "EN"}
    </button>
  )
}
