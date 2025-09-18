import React from "react";
import styles from "./CertificationCard.module.css";
import type { CertificationCardProps } from "../types/components.types";


const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  questions,
  author,
  id,
}) => {
  return (
    <div title={title} key={id} className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>
        <span className={styles.label}>Questões:</span> {questions}
      </p>
      <p className={styles.text}>
        <span className={styles.label}>Autor do teste:</span> {author}
      </p>
    </div>
  );
};

export default CertificationCard;
