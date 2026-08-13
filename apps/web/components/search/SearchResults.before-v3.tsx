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

type FlightOption = {
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: string;
  originLabel: string;
  destinationLabel: string;
  fares: Record<string, number>;
};

const flights: FlightOption[] = [
  {
    flightNumber: "SLA 101",
    departureTime: "09:10",
    arrivalTime: "16:40",
    duration: "7h 30m",
    stops: "Direct",
    originLabel: "Glasgow",
    destinationLabel: "Lagos",
    fares: {
      Economy: 595,
      "Premium Economy": 795,
      "Business Lite": 1150,
    },
  },
  {
    flightNumber: "SLA 103",
    departureTime: "13:20",
    arrivalTime: "20:55",
    duration: "7h 35m",
    stops: "Direct",
    originLabel: "Glasgow",
    destinationLabel: "Lagos",
    fares: {
      Economy: 635,
      "Premium Economy": 835,
      "Business Lite": 1195,
    },
  },
  {
    flightNumber: "SLA 107",
    departureTime: "21:40",
    arrivalTime: "05:20",
    duration: "7h 40m",
    stops: "Direct",
    originLabel: "Glasgow",
    destinationLabel: "Lagos",
    fares: {
      Economy: 565,
      "Premium Economy": 765,
      "Business Lite": 1095,
    },
  },
];

export default function SearchResults({
  from,
  to,
  departure,
  passengers,
  cabin,
}: SearchResultsProps) {
  const router = useRouter();
  const [selectedFareByFlight, setSelectedFareByFlight] = useState<Record<string, string>>({});

  const formattedDate = useMemo(() => {
    if (!departure) return "Select a date";

    const parsed = new Date(`${departure}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) {
      return departure;
    }

    return parsed.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }, [departure]);

  return (
    <section className="searchResultsSection" aria-labelledby="search-results-heading">
      <div className="searchResultsIntro">
        <div>
          <p className="eyebrow">AVAILABLE FLIGHTS</p>
          <h2 id="search-results-heading">Choose your journey.</h2>
          <p>
            {from} → {to}
          </p>
        </div>

        <div className="searchResultsMeta" aria-label="Travel details">
          <span>Departure {formattedDate}</span>
          <span>{passengers} passenger{passengers === "1" ? "" : "s"}</span>
          <span>{cabin}</span>
        </div>
      </div>

      <div className="searchResultsList">
        {flights.map((flight) => {
          const selectedFare = selectedFareByFlight[flight.flightNumber] ?? cabin;

          return (
            <article className="searchResultCard" key={flight.flightNumber}>
              <div className="searchResultCardTop">
                <div>
                  <h3>{flight.flightNumber}</h3>
                  <p>{flight.originLabel} to {flight.destinationLabel}</p>
                </div>
                <div className="searchResultBadge">{flight.stops}</div>
              </div>

              <div className="searchResultRoute">
                <strong>{flight.departureTime}</strong>
                <span>→</span>
                <strong>{flight.arrivalTime}</strong>
              </div>

              <div className="searchResultDetails">
                <span>Duration {flight.duration}</span>
                <span>Departure {formattedDate}</span>
              </div>

              <div className="searchResultFares">
                {Object.entries(flight.fares).map(([fareName, price]) => {
                  const isSelected = selectedFare === fareName;

                  return (
                    <button
                      key={fareName}
                      type="button"
                      className={`fareChoice${isSelected ? " selected" : ""}`}
                      onClick={() =>
                        setSelectedFareByFlight((current) => ({
                          ...current,
                          [flight.flightNumber]: fareName,
                        }))
                      }
                    >
                      <span className="fareLabel">{fareName}</span>
                      <span className="farePrice">£{price}</span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                className="searchResultAction"
                onClick={() => {
                  const selectedFare = selectedFareByFlight[flight.flightNumber] ?? cabin;
                  const price = flight.fares[selectedFare as keyof typeof flight.fares];
                  const params = new URLSearchParams({
                    flight: flight.flightNumber,
                    from,
                    to,
                    departure,
                    passengers,
                    cabin,
                    fare: selectedFare,
                    price: String(price),
                  });

                  router.push(`/booking/passengers?${params.toString()}`);
                }}
              >
                Select flight
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
