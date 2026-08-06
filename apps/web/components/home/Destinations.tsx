const destinations = [
  {
    city: "Lagos",
    country: "Nigeria",
    code: "LOS",
    frequency: "Daily",
    flightTime: "7h 30m",
  },
  {
    city: "Accra",
    country: "Ghana",
    code: "ACC",
    frequency: "Daily",
    flightTime: "7h 15m",
  },
  {
    city: "Banjul",
    country: "The Gambia",
    code: "BJL",
    frequency: "4 weekly",
    flightTime: "6h 50m",
  },
  {
    city: "Dakar",
    country: "Senegal",
    code: "DSS",
    frequency: "4 weekly",
    flightTime: "6h 40m",
  },
  {
    city: "Nairobi",
    country: "Kenya",
    code: "NBO",
    frequency: "3 weekly",
    flightTime: "9h 10m",
  },
  {
    city: "Johannesburg",
    country: "South Africa",
    code: "JNB",
    frequency: "3 weekly",
    flightTime: "11h 20m",
  },
];

export default function Destinations() {
  return (
    <section
      className="destinationsSection"
      id="destinations"
      aria-labelledby="destinations-heading"
    >
      <div className="sectionHeading">
        <div className="sectionHeadingText">
          <p className="eyebrow">EXPLORE AFRICA</p>
          <h2 id="destinations-heading">Strategic destinations. Meaningful connections.</h2>
          <p className="sectionNote">Built in Scotland. Connecting Africa.</p>
        </div>

        <p className="sectionIntro">
          From Scotland to Africa’s most important diaspora, business and leisure hubs.
        </p>
      </div>

      <div className="destinationGrid" role="list">
        {destinations.map((destination) => (
          <article className="destinationCard" key={destination.code} role="listitem">
            <span className="airportCode">{destination.code}</span>
            <div className="destinationCardContent">
              <p className="destinationCountry">{destination.country}</p>
              <h3>{destination.city}</h3>

              <dl className="destinationMeta">
                <div>
                  <dt>Frequency</dt>
                  <dd>{destination.frequency}</dd>
                </div>
                <div>
                  <dt>Flight time</dt>
                  <dd>{destination.flightTime}</dd>
                </div>
              </dl>

              <a href="#book" className="destinationLink">
                Explore route →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
