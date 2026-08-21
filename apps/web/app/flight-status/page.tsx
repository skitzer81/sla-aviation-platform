"use client";

import Link from "next/link";
import { useState } from "react";
import "./flight-status.css";

export default function FlightStatusPage() {
  const [flightNumber, setFlightNumber] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [date, setDate] = useState("");

  return (
    <main className="statusPage">

      <header className="statusHeader">
        <div className="statusHeaderInner">
          <Link href="/v6" className="statusBrand">
            <span className="statusMark">∞</span>

            <span>
              <strong>SLA</strong>
              <small>AIRLINES</small>
            </span>
          </Link>

          <nav>
            <Link href="/v6">Book</Link>
            <Link href="/manage-booking">Manage</Link>
            <Link href="/check-in">Check-in</Link>
            <Link href="/flight-status">Flight status</Link>
            <Link href="/rewards">SLA Rewards</Link>
          </nav>
        </div>
      </header>

      <section className="statusHero">
        <div className="statusHeroInner">
          <span>FLIGHT STATUS</span>

          <h1>Stay up to date.</h1>

          <p>
            Check departure, arrival and operational information for your SLA flight.
          </p>
        </div>
      </section>

      <section className="statusSearch">
        <div className="statusCard">

          <div className="statusTabs">
            <button type="button" className="activeStatusTab">
              Flight number
            </button>

            <button type="button">
              Route
            </button>
          </div>

          <div className="statusHeading">
            <span>FIND YOUR FLIGHT</span>
            <h2>Check flight status</h2>
          </div>

          <div className="flightNumberSearch">
            <label>
              <span>Flight number</span>

              <input
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                placeholder="e.g. SLA101"
              />
            </label>

            <label>
              <span>Date</span>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>

            <button type="button">
              Check status →
            </button>
          </div>

          <div className="routeDivider">
            <span>OR SEARCH BY ROUTE</span>
          </div>

          <div className="routeStatusSearch">
            <label>
              <span>From</span>

              <input
                value={departureAirport}
                onChange={(e) => setDepartureAirport(e.target.value)}
                placeholder="Departure airport"
              />
            </label>

            <span className="routeArrow">→</span>

            <label>
              <span>To</span>

              <input
                value={arrivalAirport}
                onChange={(e) => setArrivalAirport(e.target.value)}
                placeholder="Arrival airport"
              />
            </label>

            <button type="button">
              Find flights →
            </button>
          </div>

        </div>
      </section>

      <section className="statusInfo">

        <div className="statusInfoHeading">
          <span>LIVE JOURNEY INFORMATION</span>
          <h2>Everything you need before departure.</h2>
        </div>

        <div className="statusInfoGrid">

          <article>
            <div className="statusIcon">◷</div>
            <h3>Departure time</h3>
            <p>Review scheduled and updated departure information.</p>
          </article>

          <article>
            <div className="statusIcon">✈</div>
            <h3>Flight progress</h3>
            <p>Follow available operational updates for your journey.</p>
          </article>

          <article>
            <div className="statusIcon">▣</div>
            <h3>Terminal & gate</h3>
            <p>See available airport, terminal and gate information.</p>
          </article>

          <article>
            <div className="statusIcon">◎</div>
            <h3>Arrival</h3>
            <p>Check expected arrival information at your destination.</p>
          </article>

        </div>
      </section>

    </main>
  );
}
