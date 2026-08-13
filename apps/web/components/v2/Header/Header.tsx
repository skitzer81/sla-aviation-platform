import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/v2" className={styles.brand} aria-label="SLA home">
        <Image
          src="/brand/sla-symbol.png"
          alt="SLA symbol"
          width={72}
          height={42}
          priority
          className={styles.symbol}
        />
      </a>

      <nav className={styles.nav} aria-label="Primary navigation">
        <a className={styles.active} href="#">Flights</a>
        <a href="#">Manage Booking</a>
        <a href="#">Cargo</a>
        <a href="#">Flight Status</a>
        <a href="#">Help</a>
      </nav>

      <div className={styles.actions}>
        <button type="button" className={styles.language}>
          EN
        </button>

        <button type="button" className={styles.signIn}>
          Sign in
        </button>

        <a href="#booking" className={styles.book}>
          Book
        </a>
      </div>
    </header>
  );
}
