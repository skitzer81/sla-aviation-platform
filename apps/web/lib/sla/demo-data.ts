export const demoBookings = [
  {
    reference: "SLA7X2",
    surname: "JOOF",
    status: "CONFIRMED",

    passengers: [
      {
        firstName: "Test",
        lastName: "Joof",
      },
    ],

    flight: {
      number: "SLA101",

      from: "EDI",
      fromName: "Edinburgh",

      to: "LOS",
      toName: "Lagos",

      departureDate: "2026-09-18",
      departureTime: "09:10",
      arrivalTime: "16:40",

      terminal: "Main Terminal",
      gate: "TBC",

      cabin: "Economy",
    },

    baggage: {
      checked: "2 × 23kg",
      cabin: "1 cabin bag",
    },

    meal: "Standard",
    seat: "18A",
  },

  {
    reference: "SLAACC1",
    surname: "MENSAH",
    status: "CONFIRMED",

    passengers: [
      {
        firstName: "Ama",
        lastName: "Mensah",
      },
    ],

    flight: {
      number: "SLA201",

      from: "GLA",
      fromName: "Glasgow",

      to: "ACC",
      toName: "Accra",

      departureDate: "2026-09-20",
      departureTime: "11:20",
      arrivalTime: "18:15",

      terminal: "Main Terminal",
      gate: "TBC",

      cabin: "Premium Economy",
    },

    baggage: {
      checked: "2 × 23kg",
      cabin: "1 cabin bag",
    },

    meal: "Standard",
    seat: "7C",
  },
];

export const demoFlights = [
  {
    number: "SLA101",
    from: "EDI",
    fromName: "Edinburgh",
    to: "LOS",
    toName: "Lagos",
    date: "2026-09-18",
    scheduledDeparture: "09:10",
    estimatedDeparture: "09:10",
    scheduledArrival: "16:40",
    estimatedArrival: "16:40",
    terminal: "Main Terminal",
    gate: "TBC",
    status: "On time",
  },

  {
    number: "SLA201",
    from: "GLA",
    fromName: "Glasgow",
    to: "ACC",
    toName: "Accra",
    date: "2026-09-20",
    scheduledDeparture: "11:20",
    estimatedDeparture: "11:20",
    scheduledArrival: "18:15",
    estimatedArrival: "18:15",
    terminal: "Main Terminal",
    gate: "TBC",
    status: "On time",
  },
];
