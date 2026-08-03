const destinations = [
  { city: "Lagos", country: "Nigeria", code: "LOS" },
  { city: "Accra", country: "Ghana", code: "ACC" },
  { city: "Banjul", country: "The Gambia", code: "BJL" },
  { city: "Dakar", country: "Senegal", code: "DSS" },
  { city: "Nairobi", country: "Kenya", code: "NBO" },
  { city: "Johannesburg", country: "South Africa", code: "JNB" },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#">
          <span className="brandMark">S</span>

          <span className="brandText">
            <strong>SLA</strong>
            <small>AIRLINES</small>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#book">Book</a>
          <a href="#destinations">Destinations</a>
          <a href="#experience">Experience</a>
          <a href="#investors">Investors</a>
        </nav>

        <button className="signInButton" type="button">
          Sign in
        </button>
      </header>

      <section className="hero" id="book">
        <div className="heroGlow" />

        <div className="heroContent">
          <p className="eyebrow">SLA AVIATION GROUP</p>

          <h1>
            Premium journeys.
            <br />
            Direct connections.
          </h1>

          <p className="heroDescription">
            A digital-first aviation experience connecting Scotland, Africa
            and the world.
          </p>

          <form className="flightSearch">
            <label>
              <span>From</span>
              <input defaultValue="Glasgow (GLA)" />
            </label>

            <label>
              <span>To</span>
              <input defaultValue="Lagos (LOS)" />
            </label>

            <label>
              <span>Departure</span>
              <input type="date" />
            </label>

            <label>
              <span>Passengers</span>

              <select defaultValue="1">
                <option value="1">1 passenger</option>
                <option value="2">2 passengers</option>
                <option value="3">3 passengers</option>
              </select>
            </label>

            <button type="submit">Search flights</button>
          </form>
        </div>
      </section>

      <section className="destinationsSection" id="destinations">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow darkEyebrow">OUR NETWORK</p>
            <h2>Important African destinations</h2>
          </div>

          <p>
            Focused routes designed around diaspora, business and tourism
            demand.
          </p>
        </div>

        <div className="destinationGrid">
          {destinations.map((destination, index) => (
            <article
              className={`destinationCard destinationCard${(index % 3) + 1}`}
              key={destination.code}
            >
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

      <section className="experienceSection" id="experience">
        <div>
          <p className="eyebrow">THE SLA STANDARD</p>

          <h2>
            Professional.
            <br />
            Premium. Connected.
          </h2>
        </div>

        <div className="featureGrid">
          <article>
            <span>01</span>
            <h3>Digital first</h3>
            <p>
              Book, manage trips and receive support through one connected
              platform.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Premium value</h3>
            <p>
              Thoughtful comfort and service without unnecessary complexity.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Built to scale</h3>
            <p>
              Powered by SLA OS and designed for future international growth.
            </p>
          </article>
        </div>
      </section>

      <section className="investorSection" id="investors">
        <p className="eyebrow darkEyebrow">PROJECT BAOBAB</p>

        <h2>Building a modern aviation ecosystem.</h2>

        <p>
          SLA Aviation Group combines passenger travel, digital commerce,
          cargo and technology through one unified operating platform.
        </p>

        <button type="button">Investor information</button>
      </section>

      <footer>
        <a className="brand footerBrand" href="#">
          <span className="brandMark">S</span>

          <span className="brandText">
            <strong>SLA</strong>
            <small>AVIATION GROUP</small>
          </span>
        </a>

        <p>© 2026 SLA Aviation Group. Project BAOBAB.</p>
      </footer>
    </main>
  );
}
