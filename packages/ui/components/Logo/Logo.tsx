import styles from "./Logo.module.css";

export type LogoVariant = "light" | "dark" | "symbol";

export interface LogoProps {
  variant?: LogoVariant;
  size?: "small" | "medium" | "large";
  className?: string;
}

export function Logo({
  variant = "dark",
  size = "medium",
  className = "",
}: LogoProps) {
  const showText = variant !== "symbol";

  return (
    <span
      className={[
        styles.logo,
        styles[variant],
        styles[size],
        className,
      ].join(" ")}
      aria-label="SLA Airlines"
    >
      <span className={styles.symbol} aria-hidden="true">
        <span className={styles.wing}>S</span>
      </span>

      {showText && (
        <span className={styles.wordmark}>
          <strong>SLA</strong>
          <small>AIRLINES</small>
        </span>
      )}
    </span>
  );
}