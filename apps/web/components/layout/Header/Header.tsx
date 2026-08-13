import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>S</div>

        <div>
          <div className={styles.logoTitle}>SLA</div>
          <div className={styles.logoSubtitle}>AIRLINES</div>
        </div>
      </div>

      <nav className={styles.nav}>
        <a href="#">Flights</a>
        <a href="#">Manage Booking</a>
        <a href="#">Cargo</a>
        <a href="#">Flight Status</a>
        <a href="#">Help</a>
      </nav>

      <div className={styles.actions}>
        <button className={styles.language}>EN</button>

        <button className={styles.signIn}>
          Sign in
        </button>

        <button className={styles.book}>
          Book
        </button>
      </div>
    </header>
  );
}