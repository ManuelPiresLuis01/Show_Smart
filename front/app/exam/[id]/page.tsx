"use client"

import { ExamInterface } from "@/components/exam/exam-interface"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import styles from "./exam.module.css"

export default function ExamPage() {
  const params = useParams()
  const examId = params.id as string

  // Mock exam data - in real app this would be fetched based on examId
  const examData = {
    id: examId,
    title: "Web Development Fundamentals",
    duration: 60, // minutes
    questions: [
      {
        id: "1",
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlink and Text Markup Language",
        ],
        correctAnswer: 0,
      },
      {
        id: "2",
        question: "Which CSS property is used to change the text color of an element?",
        options: ["font-color", "text-color", "color", "foreground-color"],
        correctAnswer: 2,
      },
      {
        id: "3",
        question: "What is the correct way to create a function in JavaScript?",
        options: [
          "function = myFunction() {}",
          "function myFunction() {}",
          "create myFunction() {}",
          "def myFunction() {}",
        ],
        correctAnswer: 1,
      },
      {
        id: "4",
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<script>", "<style>", "<link>"],
        correctAnswer: 2,
      },
      {
        id: "5",
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 1,
      },
    ],
  }

  return (
    <div className={styles.page}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ExamInterface exam={examData} />
      </motion.div>
    </div>
  )
}
