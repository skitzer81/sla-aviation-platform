"use client";

import { useState } from "react";
import styles from "./BookingWidget.module.css";
import AirportAutocomplete, {
  type Airport,
} from "@/components/booking/AirportAutocomplete/AirportAutocomplete";

const airports: Airport[] = [
  {
    city: "Edinburgh",
    airport: "Edinburgh Airport",
    country: "Scotland",
    code: "EDI",
  },
  {
    city: "Glasgow",
    airport: "Glasgow Airport",
    country: "Scotland",
    code: "GLA",
  },
  {
    city: "Aberdeen",
    airport: "Aberdeen International Airport",
    country: "Scotland",
    code: "ABZ",
  },
  {
    city: "London",
    airport: "Heathrow Airport",
    country: "England",
    code: "LHR",
  },
  {
    city: "Manchester",
    airport: "Manchester Airport",
    country: "England",
    code: "MAN",
  },
  {
    city: "Lagos",
    airport: "Murtala Muhammed International Airport",
    country: "Nigeria",
    code: "LOS",
  },
  {
    city: "Accra",
    airport: "Kotoka International Airport",
    country: "Ghana",
    code: "ACC",
  },
  {
    city: "Banjul",
    airport: "Banjul International Airport",
    country: "The Gambia",
    code: "BJL",
  },
  {
    city: "Dakar",
    airport: "Blaise Diagne International Airport",
    country: "Senegal",
    code: "DSS",
  },
  {
    city: "Nairobi",
    airport: "Jomo Kenyatta International Airport",
    country: "Kenya",
    code: "NBO",
  },
  {
    city: "Johannesburg",
    airport: "O. R. Tambo International Airport",
    country: "South Africa",
    code: "JNB",
  },
];

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M12 21s7-6.1 7-12A7 7 0 1 0 5 9c0 5.9 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="9"
        r="2.4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M7 3v4M17 3v4M3 10h18"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PassengerIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <circle
        cx="12"
        cy="8"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5 21c.7-4.1 3-6 7-6s6.3 1.9 7 6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function BookingWidget() {
  const [tripType, setTripType] =
    useState<"return" | "one-way" | "multi-city">("return");

  const [from, setFrom] = useState("Edinburgh (EDI)");
  const [to, setTo] = useState("Lagos (LOS)");

  function swapAirports() {
    setFrom(to);
    setTo(from);
  }

  return (
    <form
      className={styles.card}
      id="booking"
      action="/search"
      method="GET"
    >
      <input type="hidden" name="tripType" value={tripType} />

      

      <div className={styles.routeRow}>
        <AirportAutocomplete
          label="From"
          name="from"
          airports={airports}
          value={from}
          onValueChange={setFrom}
          icon={<LocationIcon />}
        />

        <button
          className={styles.swap}
          type="button"
          onClick={swapAirports}
          aria-label="Swap departure and destination"
        >
          ⇄
        </button>

        <AirportAutocomplete
          label="To"
          name="to"
          airports={airports}
          value={to}
          onValueChange={setTo}
          icon={<LocationIcon />}
        />

        <label className={styles.field}>
          <span>Departure</span>
          <div className={styles.controlShell}>
            <span className={styles.controlIcon}>
              <CalendarIcon />
            </span>
            <input type="date" name="departure" required />
          </div>
        </label>

        {tripType !== "one-way" && (
          <label className={styles.field}>
            <span>Return</span>
            <div className={styles.controlShell}>
              <span className={styles.controlIcon}>
                <CalendarIcon />
              </span>
              <input type="date" name="return" />
            </div>
          </label>
        )}

        <label className={styles.field}>
          <span>Passengers</span>
          <div className={styles.controlShell}>
            <select className={styles.passengerSelect} name="passengers" defaultValue="1">
              <option value="1">1 passenger</option>
              <option value="2">2 passengers</option>
              <option value="3">3 passengers</option>
              <option value="4">4 passengers</option>
            </select>
          </div>
        </label>

        <label className={styles.field}>
          <span>Cabin</span>
          <select name="cabin" defaultValue="economy">
            <option value="economy">Economy</option>
            <option value="premium-economy">Premium Economy</option>
            <option value="business">Business</option>
          </select>
        </label>
      </div>

      <button className={styles.search} type="submit">
        <span>Search flights</span>
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
