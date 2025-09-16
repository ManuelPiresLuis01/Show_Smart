"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./exam-timer.module.css"

interface ExamTimerProps {
  timeRemaining: number // in seconds
  onTimeUp: () => void
}

export function ExamTimer({ timeRemaining, onTimeUp }: ExamTimerProps) {
  const { t } = useTranslation()
  const [time, setTime] = useState(timeRemaining)

  useEffect(() => {
    setTime(timeRemaining)
  }, [timeRemaining])

  useEffect(() => {
    if (time <= 0) {
      onTimeUp()
      return
    }

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          onTimeUp()
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [time, onTimeUp])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
    }
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const getTimerClass = () => {
    if (time <= 300) return styles.critical // 5 minutes
    if (time <= 600) return styles.warning // 10 minutes
    return styles.normal
  }

  return (
    <div className={`${styles.timer} ${getTimerClass()}`}>
      <div className={styles.timerLabel}>{t("exam.timeRemaining", { time: formatTime(time) })}</div>
      <div className={styles.timerBar}>
        <div
          className={styles.timerProgress}
          style={{
            width: `${(time / timeRemaining) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}
