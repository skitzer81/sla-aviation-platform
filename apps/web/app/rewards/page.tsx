import Link from "next/link";

export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f5f6f7",
      color: "#061b3d"
    }}>
      <header style={{
        height: 76,
        background: "#061b3d",
        display: "flex",
        alignItems: "center",
        padding: "0 7vw"
      }}>
        <Link
          href="/v6"
          style={{
            color: "white",
            textDecoration: "none",
            fontFamily: "Georgia, serif",
            fontSize: 26,
            letterSpacing: 3
          }}
        >
          SLA
        </Link>
      </header>

      <section style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "120px 30px"
      }}>
        <span style={{
          color: "#c9982d",
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: 4
        }}>
          SLA AIRLINES
        </span>

        <h1 style={{
          margin: "14px 0",
          fontFamily: "Georgia, serif",
          fontSize: "clamp(44px, 6vw, 76px)",
          fontWeight: 400
        }}>
          SLA Rewards
        </h1>

        <p style={{
          maxWidth: 620,
          color: "#64748b",
          fontSize: 17,
          lineHeight: 1.7
        }}>
          Earn recognition and rewards every time you travel.
        </p>

        <button style={{
          marginTop: 28,
          border: 0,
          background: "#0a4f8f",
          color: "white",
          padding: "15px 24px",
          fontWeight: 800,
          cursor: "pointer"
        }}>
          Join SLA Rewards
        </button>
      </section>
    </main>
  );
}
