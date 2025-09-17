import Link from "next/link";
import styles from "../layout/navigation.module.css"

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      ShowSmart
    </Link>
  );
}
