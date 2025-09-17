"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
// import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import styles from "./navigation.module.css";
import Logo from "../ui/logo";
export function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <Logo />

        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            {t("nav.home")}
          </Link>
          <Link href="/exams" className={styles.navLink}>
            {t("nav.exams")}
          </Link>
          <Link href="/dashboard" className={styles.navLink}>
            {t("nav.dashboard")}
          </Link>
          <Link href="/verify" className={styles.navLink}>
            {t("nav.verify")}
          </Link>
        </div>

        <div className={styles.navActions}>
          {/* <ThemeSwitcher /> */}
          <LanguageSwitcher />
          <Link href="/login" className="btn btn-secondary">
            {t("nav.login")}
          </Link>
          <Link href="/register" className="btn btn-primary">
            {t("nav.register")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
