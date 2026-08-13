import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <main className={styles.page}>
      <Image
        src="/hero/sla-hero-approved.png"
        alt="SLA Airlines booking experience"
        width={1536}
        height={1024}
        priority
        className={styles.design}
      />
    </main>
  );
}
