"use client";

import Link from "next/link";
import { useState } from "react";
import "./checkin.css";

export default function CheckInPage() {
  const [reference, setReference] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <main className="checkinPage">

      <header className="checkinHeader">
        <div className="checkinHeaderInner">
          <Link href="/v6" className="checkinBrand">
            <span className="checkinMark">∞</span>
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

      <section className="checkinHero">
        <div className="checkinHeroInner">
          <span>CHECK-IN</span>
          <h1>Ready when you are.</h1>
          <p>
            Check in online, confirm your details and prepare for departure.
          </p>
        </div>
      </section>

      <section className="checkinLookup">
        <div className="checkinCard">

          <div className="checkinTitle">
            <span>YOUR FLIGHT</span>
            <h2>Start check-in</h2>
          </div>

          <div className="checkinFields">
            <label>
              <span>Booking reference</span>
              <input
                value={reference}
                onChange={(e) => setReference(e.target.value.toUpperCase())}
                placeholder="e.g. SLA7X2"
                maxLength={8}
              />
            </label>

            <label>
              <span>Last name</span>
              <input
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Passenger surname"
              />
            </label>

            <button type="button">
              Continue →
            </button>
          </div>

          <p className="checkinNote">
            Online check-in availability depends on your flight and departure airport.
          </p>

        </div>
      </section>

      <section className="checkinSteps">
        <div className="checkinStepsHeading">
          <span>BEFORE YOU FLY</span>
          <h2>Your check-in journey</h2>
        </div>

        <div className="checkinStepGrid">

          <article>
            <span>01</span>
            <h3>Confirm passengers</h3>
            <p>Review traveller names and required travel information.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Choose seats</h3>
            <p>Select available seats for your journey.</p>
          </article>

          <article>
            <span>03</span>
            <h3>Review baggage</h3>
            <p>Confirm your included allowance and any additional baggage.</p>
          </article>

          <article>
            <span>04</span>
            <h3>Boarding pass</h3>
            <p>Receive your digital boarding pass when eligible.</p>
          </article>

        </div>
      </section>

    </main>
  );
}
