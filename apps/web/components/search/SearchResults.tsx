"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type SearchResultsProps = {
  from: string;
  to: string;
  departure: string;
  passengers: string;
  cabin: string;
};

type FareName = "Economy" | "Premium Economy" | "Caledonia";

const flights = [
  {
    flightNumber: "SLA 101",
    departureTime: "09:10",
    arrivalTime: "16:40",
    duration: "7h 30m",
    aircraft: "Airbus A321LR",
    fares: {
      Economy: 595,
      "Premium Economy": 795,
      Caledonia: 1150,
    },
  },
  {
    flightNumber: "SLA 103",
    departureTime: "13:20",
    arrivalTime: "20:55",
    duration: "7h 35m",
    aircraft: "Airbus A321LR",
    fares: {
      Economy: 635,
      "Premium Economy": 835,
      Caledonia: 1195,
    },
  },
  {
    flightNumber: "SLA 105",
    departureTime: "20:45",
    arrivalTime: "04:20",
    duration: "7h 35m",
    aircraft: "Airbus A321LR",
    fares: {
      Economy: 665,
      "Premium Economy": 865,
      Caledonia: 1245,
    },
  },
];

function airportCode(value: string) {
  const match = value.match(/\(([A-Z]{3})\)/);
  if (match) return match[1];

  const known: Record<string, string> = {
    Edinburgh: "EDI",
    Glasgow: "GLA",
    Lagos: "LOS",
    Accra: "ACC",
    Banjul: "BJL",
    Dakar: "DSS",
  };

  return known[value] ?? value.slice(0, 3).toUpperCase();
}

function airportName(value: string) {
  return value.replace(/\s*\([A-Z]{3}\)\s*/, "");
}

function readableDate(value: string) {
  if (!value) return "Select date";

  const date = new Date(`${value}T12:00:00`);

  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function SearchResults({
  from,
  to,
  departure,
  passengers,
  cabin,
}: SearchResultsProps) {
  const router = useRouter();

  const [selectedCabin, setSelectedCabin] = useState<FareName>(
    cabin.toLowerCase().includes("premium")
      ? "Premium Economy"
      : cabin.toLowerCase().includes("business")
      ? "Caledonia"
      : "Economy"
  );

  const [expandedFlight, setExpandedFlight] = useState<string | null>(null);

  const originCode = useMemo(() => airportCode(from), [from]);
  const destinationCode = useMemo(() => airportCode(to), [to]);

  const lowestPrice = Math.min(
    ...flights.map((flight) => flight.fares[selectedCabin])
  );

  function chooseFlight(
    flightNumber: string,
    fare: FareName,
    price: number
  ) {
    const params = new URLSearchParams({
      flight: flightNumber.replace(" ", ""),
      from,
      to,
      departure,
      passengers,
      cabin: fare,
      fare,
      price: String(price),
    });

    router.push(`/booking/passengers?${params.toString()}`);
  }

  return (
    <section className="slaResults">
      <div className="journeySummary">
        <div>
          <div className="journeyRoute">
            <strong>{airportName(from)} ({originCode})</strong>
            <span>→</span>
            <strong>{airportName(to)} ({destinationCode})</strong>
          </div>

          <div className="journeyMeta">
            Return <span>•</span> {passengers} passenger
            {passengers === "1" ? "" : "s"}
            <button type="button" onClick={() => router.push("/v2")}>
              Change search
            </button>
          </div>
        </div>

        <button className="summaryButton" type="button">
          View summary
          <span>⌄</span>
        </button>
      </div>

      <div className="resultsHero">
        <div>
          <span className="slaEyebrow">SLA AIRLINES</span>
          <h1>Choose your outbound flight</h1>
          <p>
            {airportName(from)} to {airportName(to)}
          </p>
        </div>

        <div className="lowestPrice">
          <span>Lowest total price for {passengers} passenger</span>
          <strong>GBP {lowestPrice.toFixed(2)}</strong>
          <small>
            Inclusive of airfare and estimated taxes and charges
          </small>
        </div>
      </div>

      <div className="dateBar">
        <div>
          <strong>{readableDate(departure)}</strong>
          <span>{flights.length} options</span>
        </div>

        <div className="dateNav">
          <button type="button">‹ Previous day</button>
          <button type="button">Next day ›</button>
        </div>
      </div>

      <div className="filterBar">
        <div className="cabinFilters">
          <span>Show prices for:</span>

          {(["Economy", "Premium Economy", "Caledonia"] as FareName[]).map(
            (fare) => (
              <button
                key={fare}
                type="button"
                className={selectedCabin === fare ? "active" : ""}
                onClick={() => setSelectedCabin(fare)}
              >
                {fare}
              </button>
            )
          )}
        </div>

        <button className="sortButton" type="button">
          Sort: <strong>Lowest price</strong>
          <span>⌄</span>
        </button>
      </div>

      <div className="flightList">
        {flights.map((flight) => {
          const price = flight.fares[selectedCabin];
          const expanded = expandedFlight === flight.flightNumber;

          return (
            <article className="flightCard" key={flight.flightNumber}>
              <button
                type="button"
                className="flightMain"
                onClick={() =>
                  setExpandedFlight(expanded ? null : flight.flightNumber)
                }
              >
                <div className="flightTimes">
                  <div className="timeBlock">
                    <small>{readableDate(departure).split(",")[0]}</small>
                    <strong>{flight.departureTime}</strong>
                    <b>{originCode}</b>
                    <span>{airportName(from)}</span>
                  </div>

                  <div className="flightPath">
                    <span>{flight.duration}</span>
                    <div className="flightLine">
                      <i />
                    </div>
                    <u>Non-stop</u>
                  </div>

                  <div className="timeBlock">
                    <small>Arrival</small>
                    <strong>{flight.arrivalTime}</strong>
                    <b>{destinationCode}</b>
                    <span>{airportName(to)}</span>
                  </div>
                </div>

                <div className="flightPrice">
                  <small>{selectedCabin}</small>
                  <span>from GBP</span>
                  <strong>{price.toFixed(2)}</strong>
                  <b>{expanded ? "⌃" : "⌄"}</b>
                </div>
              </button>

              <div className="flightFooter">
                <div className="slaFlightMark">
                  <span className="miniInfinity">∞</span>
                  <strong>{flight.aircraft}</strong>
                  <span>{flight.flightNumber}</span>
                </div>

                <span className="includedMeal">
                  Complimentary SLA Hospitality included
                </span>
              </div>

              {expanded && (
                <div className="farePanel">
                  <div className="fareIntro">
                    <span className="slaEyebrow">CHOOSE YOUR FARE</span>
                    <h3>Travel your way</h3>
                    <p>
                      Every SLA fare includes complimentary onboard food and
                      drinks on qualifying Scotland–Africa services.
                    </p>
                  </div>

                  <div className="fareGrid">
                    <div className="fareCard">
                      <span>ECONOMY</span>
                      <strong>£{flight.fares.Economy}</strong>
                      <ul>
                        <li>Complimentary meal service</li>
                        <li>Cabin baggage</li>
                        <li>Entertainment</li>
                      </ul>
                      <button
                        type="button"
                        onClick={() =>
                          chooseFlight(
                            flight.flightNumber,
                            "Economy",
                            flight.fares.Economy
                          )
                        }
                      >
                        Select Economy
                      </button>
                    </div>

                    <div className="fareCard featured">
                      <span>PREMIUM ECONOMY</span>
                      <strong>£{flight.fares["Premium Economy"]}</strong>
                      <ul>
                        <li>Enhanced complimentary dining</li>
                        <li>Extra baggage allowance</li>
                        <li>More space and comfort</li>
                      </ul>
                      <button
                        type="button"
                        onClick={() =>
                          chooseFlight(
                            flight.flightNumber,
                            "Premium Economy",
                            flight.fares["Premium Economy"]
                          )
                        }
                      >
                        Select Premium
                      </button>
                    </div>

                    <div className="fareCard caledonia">
                      <span>SLA CALEDONIA</span>
                      <strong>£{flight.fares.Caledonia}</strong>
                      <ul>
                        <li>Premium Scottish–African dining</li>
                        <li>Priority airport experience</li>
                        <li>Higher baggage allowance</li>
                      </ul>
                      <button
                        type="button"
                        onClick={() =>
                          chooseFlight(
                            flight.flightNumber,
                            "Caledonia",
                            flight.fares.Caledonia
                          )
                        }
                      >
                        Select Caledonia
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
