"use client";

import Link from "next/link";
import "./manage.css";
import { useState } from "react";

export default function ManageBookingPage() {
  const [reference, setReference] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <main className="managePage">

      <header className="manageHeader">
        <div className="manageHeaderInner">
          <Link href="/v6" className="manageBrand">
            <span className="manageMark">∞</span>
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

      <section className="manageHero">
        <div>
          <span>SLA AIRLINES</span>
          <h1>Manage your booking</h1>
          <p>
            View your journey, update passenger details, select seats,
            add baggage and manage eligible services.
          </p>
        </div>
      </section>

      <section className="manageLookup">

        <div className="lookupCard">
          <div className="lookupHeading">
            <span>YOUR JOURNEY</span>
            <h2>Retrieve your booking</h2>
          </div>

          <div className="lookupFields">
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
              Retrieve booking →
            </button>
          </div>

          <div className="lookupHelp">
            <p>
              Your booking reference can be found in your SLA confirmation email.
            </p>
          </div>
        </div>

      </section>

      <section className="manageActions">

        <div className="manageIntro">
          <span>MANAGE YOUR JOURNEY</span>
          <h2>Everything in one place.</h2>
        </div>

        <div className="manageActionGrid">

          <article>
            <div className="actionIcon">▣</div>
            <h3>Seats</h3>
            <p>Select or change your seat before departure.</p>
          </article>

          <article>
            <div className="actionIcon">▰</div>
            <h3>Baggage</h3>
            <p>Review your allowance and add eligible baggage.</p>
          </article>

          <article>
            <div className="actionIcon">◇</div>
            <h3>Meals</h3>
            <p>Choose available meals and special dietary options.</p>
          </article>

          <article>
            <div className="actionIcon">✦</div>
            <h3>Special assistance</h3>
            <p>Request support for your journey.</p>
          </article>

          <article>
            <div className="actionIcon">↻</div>
            <h3>Change flight</h3>
            <p>Review available changes for eligible fares.</p>
          </article>

          <article>
            <div className="actionIcon">◷</div>
            <h3>Flight status</h3>
            <p>Check the latest status of your flight.</p>
          </article>

        </div>
      </section>

    </main>
  );
}
