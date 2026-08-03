export default function FlightSearch() {
  return (
    <section className="flightSearchCard" aria-labelledby="flight-search-heading">
      <div className="flightSearchCopy">
        <p className="eyebrow brightEyebrow">FLIGHT SEARCH</p>
        <h2 id="flight-search-heading">Find your next premium connection.</h2>
        <p>
          Book direct service between Scotland and Africa with flexible dates and
          tailored classes.
        </p>
      </div>

      <form className="flightSearchForm">
        <label>
          <span>From</span>
          <input defaultValue="Glasgow (GLA)" aria-label="Departure airport" />
        </label>

        <label>
          <span>To</span>
          <input defaultValue="Lagos (LOS)" aria-label="Arrival airport" />
        </label>

        <label>
          <span>Departure</span>
          <input type="date" aria-label="Departure date" />
        </label>

        <label>
          <span>Passengers</span>
          <select defaultValue="1" aria-label="Number of passengers">
            <option value="1">1 passenger</option>
            <option value="2">2 passengers</option>
            <option value="3">3 passengers</option>
            <option value="4">4 passengers</option>
          </select>
        </label>

        <button type="submit">Search flights</button>
      </form>
    </section>
  );
}
