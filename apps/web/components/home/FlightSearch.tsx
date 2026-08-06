export default function FlightSearch() {
  return (
    <section className="flightSearchCard" aria-labelledby="flight-search-heading">
      <div className="flightSearchCopy">
        <p className="eyebrow brightEyebrow">FLIGHT SEARCH</p>

        <h2 id="flight-search-heading">Find your next premium connection.</h2>

        <p>
          Book direct service between Scotland and Africa with flexible dates
          and tailored cabins.
        </p>
      </div>

      <form className="flightSearchForm" action="/search" method="GET">
        <div className="flightSearchTabs" role="tablist" aria-label="Trip type">
          <button type="button" className="flightTab active" role="tab" aria-selected="true">
            Return
          </button>
          <button type="button" className="flightTab" role="tab" aria-selected="false">
            One way
          </button>
          <button type="button" className="flightTab" role="tab" aria-selected="false">
            Multi-city
          </button>
        </div>

        <label className="flightField" htmlFor="from">
          <span>From</span>
          <input
            id="from"
            type="text"
            name="from"
            aria-label="Departure airport"
            defaultValue="Glasgow (GLA)"
          />
          <span className="fieldMeta">Scotland</span>
        </label>

        <button type="button" className="swapControl" aria-label="Swap departure and destination">
          ⇄
        </button>

        <label className="flightField" htmlFor="to">
          <span>To</span>
          <input
            id="to"
            type="text"
            name="to"
            aria-label="Arrival airport"
            defaultValue="Lagos (LOS)"
          />
          <span className="fieldMeta">Nigeria</span>
        </label>

        <label className="flightField" htmlFor="departure">
          <span>Departure</span>
          <input id="departure" type="date" name="departure" aria-label="Departure date" />
          <span className="fieldMeta">Preferred date</span>
        </label>

        <label className="flightField" htmlFor="return">
          <span>Return</span>
          <input id="return" type="date" name="return" aria-label="Return date" />
          <span className="fieldMeta">Flexible return</span>
        </label>

        <label className="flightField" htmlFor="passengers">
          <span>Passengers</span>
          <select id="passengers" name="passengers" aria-label="Number of passengers" defaultValue="1">
            <option value="1">1 passenger</option>
            <option value="2">2 passengers</option>
            <option value="3">3 passengers</option>
            <option value="4">4 passengers</option>
          </select>
          <span className="fieldMeta">Adult</span>
        </label>

        <label className="flightField" htmlFor="cabin">
          <span>Cabin</span>
          <select id="cabin" name="cabin" aria-label="Cabin class" defaultValue="Business Lite">
            <option value="Economy">Economy</option>
            <option value="Premium Economy">Premium Economy</option>
            <option value="Business Lite">Business Lite</option>
          </select>
          <span className="fieldMeta">Premium</span>
        </label>

        <button type="submit" className="searchButton">
          Search flights <span aria-hidden="true">↗</span>
        </button>

        <p className="formNotice">
          Flexible fares include lounge access, priority boarding and curated
          inflight service.
        </p>
      </form>
    </section>
  );
}
