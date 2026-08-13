import BookingWidget from "@/components/booking/BookingWidget";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.shade} aria-hidden="true" />

      <div className={styles.booking}>
        <BookingWidget />
      </div>
    </section>
  );
}
