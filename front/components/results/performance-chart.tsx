"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import styles from "./performance-chart.module.css"

interface PerformanceChartProps {
  score: number
  correctAnswers: number
  totalQuestions: number
}

export function PerformanceChart({ score, correctAnswers, totalQuestions }: PerformanceChartProps) {
  const incorrectAnswers = totalQuestions - correctAnswers

  const data = [
    {
      name: "Correct",
      value: correctAnswers,
      color: "#059669",
    },
    {
      name: "Incorrect",
      value: incorrectAnswers,
      color: "#dc2626",
    },
  ]

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Performance Breakdown</h3>

      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>{correctAnswers}</div>
          <div className={styles.statLabel}>Correct</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{incorrectAnswers}</div>
          <div className={styles.statLabel}>Incorrect</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statValue}>{score}%</div>
          <div className={styles.statLabel}>Score</div>
        </div>
      </div>
    </div>
  )
}
