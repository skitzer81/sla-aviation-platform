"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import PremiumBookingShell from "@/components/booking/PremiumBookingShell";

const rows = [
  ["1A", "1B", "1C", "1D"],
  ["2A", "2B", "2C", "2D"],
  ["3A", "3B", "3C", "3D"],
  ["4A", "4B", "4C", "4D"],
  ["5A", "5B", "5C", "5D"],
  ["6A", "6B", "6C", "6D"],
  ["7A", "7B", "7C", "7D"],
  ["8A", "8B", "8C", "8D"],
];

const occupied = new Set([
  "1B",
  "2C",
  "3A",
  "4D",
  "6B",
  "7C",
]);

export default function SeatsPage() {
  const router = useRouter();
  const params = useSearchParams();

  const [selectedSeat, setSelectedSeat] = useState(
    params.get("seat") || ""
  );

  function continueNext() {
    if (!selectedSeat) return;

    const next = new URLSearchParams(params.toString());
    next.set("seat", selectedSeat);

    router.push(`/booking/baggage?${next.toString()}`);
  }

  return (
    <PremiumBookingShell
      step={3}
      eyebrow="SEAT SELECTION"
      title="Choose your seat"
    >
      <section className="premiumPanel">

        <div className="premiumPanelHeader">
          <h2>Edinburgh to Lagos</h2>

          <p>
            Select your preferred seat for SLA101.
          </p>
        </div>

        <div className="premiumPanelBody">

          <div
            style={{
              maxWidth: 580,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                marginBottom: 20,
                padding: "18px 20px",
                background: "#f6f8fa",
                border: "1px solid #e0e6ec",
                borderRadius: 8,
                display: "flex",
                justifyContent: "space-between",
                gap: 20,
              }}
            >
              <div>
                <small style={{ color: "#7b8795" }}>
                  FLIGHT
                </small>

                <strong
                  style={{
                    display: "block",
                    marginTop: 4,
                  }}
                >
                  SLA101
                </strong>
              </div>

              <div>
                <small style={{ color: "#7b8795" }}>
                  CABIN
                </small>

                <strong
                  style={{
                    display: "block",
                    marginTop: 4,
                  }}
                >
                  Economy
                </strong>
              </div>

              <div>
                <small style={{ color: "#7b8795" }}>
                  AIRCRAFT
                </small>

                <strong
                  style={{
                    display: "block",
                    marginTop: 4,
                  }}
                >
                  SLA
                </strong>
              </div>
            </div>

            <div
              style={{
                padding: "30px 36px 38px",
                background: "#f7f9fb",
                border: "1px solid #dfe5eb",
                borderRadius: "110px 110px 22px 22px",
              }}
            >
              <div
                style={{
                  marginBottom: 28,
                  textAlign: "center",
                  color: "#7b8795",
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: 2.5,
                }}
              >
                FRONT OF AIRCRAFT
              </div>

              <div
                style={{
                  display: "grid",
                  gap: 12,
                }}
              >
                {rows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "54px 54px 34px 54px 54px",
                      gap: 8,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {row.slice(0, 2).map((seat) => (
                      <Seat
                        key={seat}
                        seat={seat}
                        occupied={occupied.has(seat)}
                        selected={selectedSeat === seat}
                        onSelect={setSelectedSeat}
                      />
                    ))}

                    <span
                      style={{
                        textAlign: "center",
                        color: "#9aa5b1",
                        fontSize: 10,
                      }}
                    >
                      {rowIndex + 1}
                    </span>

                    {row.slice(2).map((seat) => (
                      <Seat
                        key={seat}
                        seat={seat}
                        occupied={occupied.has(seat)}
                        selected={selectedSeat === seat}
                        onSelect={setSelectedSeat}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
                color: "#697789",
                fontSize: 11,
              }}
            >
              <span>□ Available</span>
              <span>■ Unavailable</span>
              <span>▣ Selected</span>
            </div>

          </div>

          <div
            style={{
              marginTop: 30,
              paddingTop: 22,
              borderTop: "1px solid #e2e7ec",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div>
              <small
                style={{
                  color: "#7b8795",
                  fontSize: 9,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                }}
              >
                SELECTED SEAT
              </small>

              <strong
                style={{
                  display: "block",
                  marginTop: 5,
                  fontSize: 24,
                }}
              >
                {selectedSeat || "None"}
              </strong>
            </div>

            <button
              type="button"
              className="premiumPrimaryButton"
              disabled={!selectedSeat}
              onClick={continueNext}
              style={{
                opacity: selectedSeat ? 1 : 0.45,
                cursor: selectedSeat
                  ? "pointer"
                  : "not-allowed",
              }}
            >
              Continue to baggage →
            </button>
          </div>

        </div>
      </section>
    </PremiumBookingShell>
  );
}

function Seat({
  seat,
  occupied,
  selected,
  onSelect,
}: {
  seat: string;
  occupied: boolean;
  selected: boolean;
  onSelect: (seat: string) => void;
}) {
  return (
    <button
      type="button"
      disabled={occupied}
      onClick={() => onSelect(seat)}
      aria-label={`Seat ${seat}`}
      style={{
        width: 54,
        height: 50,
        borderRadius: "8px 8px 5px 5px",

        border: selected
          ? "2px solid #dca51c"
          : "1px solid #cbd5df",

        background: occupied
          ? "#dfe4e9"
          : selected
          ? "#fff2c8"
          : "#ffffff",

        color: occupied
          ? "#9ca6b0"
          : "#061b3d",

        fontSize: 11,
        fontWeight: 800,

        cursor: occupied
          ? "not-allowed"
          : "pointer",
      }}
    >
      {seat}
    </button>
  );
}
