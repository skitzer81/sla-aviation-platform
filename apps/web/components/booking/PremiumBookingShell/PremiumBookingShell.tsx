import Link from "next/link";
import "./PremiumBookingShell.css";

type Props = {
  step: number;
  title: string;
  eyebrow: string;
  children: React.ReactNode;
  summary?: {
    from?: string;
    to?: string;
    flight?: string;
    date?: string;
    cabin?: string;
    total?: string;
  };
};

const steps = [
  "Flight",
  "Passengers",
  "Seats",
  "Baggage",
  "Meals",
  "Review",
  "Payment",
];

export default function PremiumBookingShell({
  step,
  title,
  eyebrow,
  children,
  summary = {
    from: "EDI",
    to: "LOS",
    flight: "SLA101",
    date: "18 Sep 2026",
    cabin: "Economy",
    total: "£595",
  },
}: Props) {
  return (
    <main className="premiumBookingPage">
      <header className="premiumBookingHeader">
        <div className="premiumBookingHeaderInner">
          <Link href="/v6" className="premiumBookingBrand">
            <span className="premiumBookingMark">∞</span>
            <span>
              <strong>SLA</strong>
              <small>AIRLINES</small>
            </span>
          </Link>

          <div className="premiumBookingHeaderActions">
            <Link href="/manage-booking">Manage booking</Link>
            <Link href="/flight-status">Flight status</Link>
          </div>
        </div>
      </header>

      <section className="premiumBookingProgress">
        <div className="premiumBookingProgressInner">
          {steps.map((label, index) => {
            const active = index + 1 === step;
            const complete = index + 1 < step;

            return (
              <div
                key={label}
                className={[
                  "premiumBookingStep",
                  active ? "active" : "",
                  complete ? "complete" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span>{index + 1}</span>
                <strong>{label}</strong>
              </div>
            );
          })}
        </div>
      </section>

      <section className="premiumBookingHero">
        <div className="premiumBookingHeroInner">
          <span>{eyebrow}</span>
          <h1>{title}</h1>
        </div>
      </section>

      <section className="premiumBookingContent">
        <div className="premiumBookingContentInner">
          <div className="premiumBookingMain">{children}</div>

          <aside className="premiumBookingSummary">
            <span className="summaryEyebrow">YOUR JOURNEY</span>

            <div className="summaryRoute">
              <div>
                <small>From</small>
                <strong>{summary.from}</strong>
              </div>

              <div className="summaryLine">
                <span>✈</span>
              </div>

              <div>
                <small>To</small>
                <strong>{summary.to}</strong>
              </div>
            </div>

            <div className="summaryMeta">
              <div>
                <small>Flight</small>
                <strong>{summary.flight}</strong>
              </div>

              <div>
                <small>Date</small>
                <strong>{summary.date}</strong>
              </div>

              <div>
                <small>Cabin</small>
                <strong>{summary.cabin}</strong>
              </div>
            </div>

            <div className="summaryTotal">
              <span>Total</span>
              <strong>{summary.total}</strong>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
