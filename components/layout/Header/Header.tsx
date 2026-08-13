import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/v2" className={styles.brand} aria-label="SLA Airlines home">
        <span className={styles.logoMark}>S</span>

        <span className={styles.wordmark}>
          <strong>SLA</strong>
          <small>AIRLINES</small>
        </span>
      </a>

      <nav className={styles.nav} aria-label="Primary navigation">
        <a className={styles.active} href="#flights">
          Flights
        </a>
        <a href="#manage">Manage Booking</a>
        <a href="#cargo">Cargo</a>
        <a href="#status">Flight Status</a>
        <a href="#help">Help</a>
      </nav>

      <div className={styles.actions}>
        <button className={styles.language} type="button">
          EN⌄
        </button>

        <span className={styles.divider} aria-hidden="true" />

        <button className={styles.signIn} type="button">
          Sign in
        </button>

        <a className={styles.book} href="#booking">
          Book
        </a>
      </div>
    </header>
  );
}
