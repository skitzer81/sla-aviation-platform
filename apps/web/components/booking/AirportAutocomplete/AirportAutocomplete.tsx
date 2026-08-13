"use client";

import { useMemo, useState } from "react";
import styles from "./AirportAutocomplete.module.css";

export type Airport = {
  city: string;
  airport: string;
  country: string;
  code: string;
};

type Props = {
  label: string;
  name: string;
  airports: Airport[];
  value: string;
  onValueChange: (value: string) => void;
  icon?: React.ReactNode;
};

export default function AirportAutocomplete({
  label,
  name,
  airports,
  value,
  onValueChange,
  icon,
}: Props) {
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    const query = value.trim().toLowerCase();

    if (!query) {
      return airports.slice(0, 7);
    }

    return airports
      .filter((item) =>
        [
          item.city,
          item.airport,
          item.country,
          item.code,
        ].some((text) => text.toLowerCase().includes(query)),
      )
      .slice(0, 7);
  }, [value, airports]);

  function selectAirport(airport: Airport) {
    onValueChange(`${airport.city} (${airport.code})`);
    setOpen(false);
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>

      <div className={styles.inputShell}>
        {icon && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )}

        <input
          id={name}
          name={name}
          className={styles.input}
          type="text"
          value={value}
          placeholder="City or airport"
          autoComplete="off"
          required
          onFocus={() => setOpen(true)}
          onChange={(event) => {
            onValueChange(event.target.value);
            setOpen(true);
          }}
          onBlur={() => {
            window.setTimeout(() => setOpen(false), 140);
          }}
        />
      </div>

      {open && filtered.length > 0 && (
        <div className={styles.menu} role="listbox">
          {filtered.map((airport) => (
            <button
              key={airport.code}
              type="button"
              className={styles.option}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => selectAirport(airport)}
            >
              <span className={styles.optionMain}>
                <strong>{airport.city}</strong>
                <span>{airport.airport}</span>
                <small>{airport.country}</small>
              </span>

              <span className={styles.code}>{airport.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
