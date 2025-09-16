"use client"

import { CertificateVerification } from "@/components/verify/certificate-verification"
import { motion } from "framer-motion"
import styles from "./verify.module.css"

export default function VerifyPage() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.container}`}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <CertificateVerification />
        </motion.div>
      </div>
    </div>
  )
}
