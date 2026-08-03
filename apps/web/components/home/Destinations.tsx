const destinations = [
  { city: "Lagos", country: "Nigeria", code: "LOS" },
  { city: "Accra", country: "Ghana", code: "ACC" },
  { city: "Banjul", country: "The Gambia", code: "BJL" },
  { city: "Dakar", country: "Senegal", code: "DSS" },
  { city: "Nairobi", country: "Kenya", code: "NBO" },
  { city: "Johannesburg", country: "South Africa", code: "JNB" },
];

export default function Destinations() {
  return (
    <section className="destinationsSection" id="destinations">
      <div className="sectionHeading">
        <div>
          <p className="eyebrow">OUR NETWORK</p>
          <h2>Key African destinations with premium service.</h2>
        </div>

        <p>
          SLA connects the most important diaspora, business and leisure hubs from
          Scotland to Africa.
        </p>
      </div>

      <div className="destinationGrid">
        {destinations.map((destination, index) => (
          <article className="destinationCard" key={destination.code}>
            <span className="airportCode">{destination.code}</span>
            <div>
              <p>{destination.country}</p>
              <h3>{destination.city}</h3>
              <a href="#book">Explore route →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
