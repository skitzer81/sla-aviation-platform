"use client";

import Link from "next/link";
import { useState } from "react";
import "./manage.css";

type Booking = {
  reference: string;
  surname: string;
  status: string;
  passengers: {
    firstName: string;
    lastName: string;
  }[];
  flight: {
    number: string;
    from: string;
    fromName: string;
    to: string;
    toName: string;
    departureDate: string;
    departureTime: string;
    arrivalTime: string;
    terminal: string;
    gate: string;
    cabin: string;
  };
  baggage: {
    checked: string;
    cabin: string;
  };
  meal: string;
  seat: string;
};

export default function ManageBookingPage() {
  const [reference, setReference] = useState("");
  const [surname, setSurname] = useState("");

  const [booking, setBooking] = useState<Booking | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function retrieveBooking() {
    if (!reference.trim() || !surname.trim()) {
      setBooking(null);
      setMessage("Please enter your booking reference and last name.");
      return;
    }

    setLoading(true);
    setBooking(null);
    setMessage("");

    try {
      const response = await fetch("/api/bookings/retrieve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reference: reference.trim().toUpperCase(),
          surname: surname.trim().toUpperCase(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setMessage(
          data.error ||
          "We could not find a booking matching those details."
        );
        return;
      }

      setBooking(data.booking);
    } catch (error) {
      console.error(error);

      setMessage(
        "We could not connect to the booking service. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

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
            review baggage and manage eligible services.
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
                type="text"
                value={reference}
                onChange={(event) =>
                  setReference(event.target.value.toUpperCase())
                }
                placeholder="e.g. SLA7X2"
                maxLength={8}
              />
            </label>

            <label>
              <span>Last name</span>

              <input
                type="text"
                value={surname}
                onChange={(event) =>
                  setSurname(event.target.value)
                }
                placeholder="Passenger surname"
              />
            </label>

            <button
              type="button"
              onClick={retrieveBooking}
              disabled={loading}
            >
              {loading ? "Searching..." : "Retrieve booking →"}
            </button>

          </div>

          <div className="lookupHelp">
            <p>
              Your booking reference can be found in your SLA confirmation email.
            </p>
          </div>

          {message && (
            <div className="bookingMessage">
              {message}
            </div>
          )}

          {booking && (
            <div className="bookingResult">

              <div className="bookingResultTop">

                <div>
                  <span>BOOKING REFERENCE</span>
                  <strong>{booking.reference}</strong>
                </div>

                <b>{booking.status}</b>

              </div>

              <div className="bookingPassenger">
                <span>PASSENGER</span>

                <strong>
                  {booking.passengers[0]?.firstName}{" "}
                  {booking.passengers[0]?.lastName}
                </strong>
              </div>

              <div className="bookingJourney">

                <div>
                  <small>{booking.flight.fromName}</small>
                  <strong>{booking.flight.from}</strong>
                  <span>{booking.flight.departureTime}</span>
                </div>

                <div className="bookingJourneyLine">
                  <span>{booking.flight.number}</span>
                  <div />
                  <small>Non-stop</small>
                </div>

                <div>
                  <small>{booking.flight.toName}</small>
                  <strong>{booking.flight.to}</strong>
                  <span>{booking.flight.arrivalTime}</span>
                </div>

              </div>

              <div className="bookingDetails">

                <span>
                  Date: {booking.flight.departureDate}
                </span>

                <span>
                  Cabin: {booking.flight.cabin}
                </span>

                <span>
                  Seat: {booking.seat}
                </span>

                <span>
                  Checked baggage: {booking.baggage.checked}
                </span>

                <span>
                  Cabin baggage: {booking.baggage.cabin}
                </span>

                <span>
                  Meal: {booking.meal}
                </span>

              </div>

              <div className="bookingActions">

                <Link href="/check-in">
                  Check in
                </Link>

                <Link href="/flight-status">
                  Flight status
                </Link>

              </div>

              <div className="manageDashboard">

                <article className="manageDashboardCard">
                  <div className="manageDashboardIcon">▣</div>
                  <div>
                    <span>SEAT</span>
                    <h3>{booking.seat}</h3>
                    <p>View or change your seat.</p>
                  </div>
                  <button type="button">Manage seat →</button>
                </article>

                <article className="manageDashboardCard">
                  <div className="manageDashboardIcon">▰</div>
                  <div>
                    <span>BAGGAGE</span>
                    <h3>{booking.baggage.checked}</h3>
                    <p>{booking.baggage.cabin}</p>
                  </div>
                  <button type="button">Manage baggage →</button>
                </article>

                <article className="manageDashboardCard">
                  <div className="manageDashboardIcon">◇</div>
                  <div>
                    <span>COMPLIMENTARY DINING</span>
                    <h3>{booking.meal}</h3>
                    <p>Review or select your onboard meal.</p>
                  </div>
                  <button type="button">Choose meal →</button>
                </article>

                <article className="manageDashboardCard">
                  <div className="manageDashboardIcon">✦</div>
                  <div>
                    <span>SPECIAL ASSISTANCE</span>
                    <h3>Available</h3>
                    <p>Request additional support for your journey.</p>
                  </div>
                  <button type="button">Request assistance →</button>
                </article>

                <article className="manageDashboardCard">
                  <div className="manageDashboardIcon">↻</div>
                  <div>
                    <span>CHANGE FLIGHT</span>
                    <h3>Review options</h3>
                    <p>View eligible flight changes for this fare.</p>
                  </div>
                  <button type="button">Change flight →</button>
                </article>

                <article className="manageDashboardCard">
                  <div className="manageDashboardIcon">◷</div>
                  <div>
                    <span>FLIGHT STATUS</span>
                    <h3>{booking.flight.number}</h3>
                    <p>Check the latest operational information.</p>
                  </div>
                  <Link href="/flight-status">View status →</Link>
                </article>

              </div>

            </div>
          )}

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
            <p>Review your allowance and eligible additional baggage.</p>
          </article>

          <article>
            <div className="actionIcon">◇</div>
            <h3>Meals</h3>
            <p>
              Review your complimentary meal and available dietary options.
            </p>
          </article>

          <article>
            <div className="actionIcon">✦</div>
            <h3>Special assistance</h3>
            <p>Request additional support for your journey.</p>
          </article>

          <article>
            <div className="actionIcon">↻</div>
            <h3>Change flight</h3>
            <p>Review available changes for eligible fares.</p>
          </article>

          <article>
            <div className="actionIcon">◷</div>
            <h3>Flight status</h3>
            <p>Check the latest information about your flight.</p>
          </article>

        </div>
      </section>

    </main>
  );
}
