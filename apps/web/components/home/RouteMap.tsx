export default function RouteMap() {
  return (
    <section className="routeSection">
      <div className="routeHeader">
        <p className="eyebrow">SCOTLAND TO AFRICA</p>
        <h2>Strong corridors for business, culture and premium travel.</h2>
        <p>
          A refined Scotland-to-Africa route map built around Lagos, Accra,
          Dakar, Banjul, Nairobi and Johannesburg.
        </p>
      </div>

      <div className="routeMapGrid">
        <article className="routeCard">
          <span>Gateway base</span>
          <h3>Scotland hub</h3>
          <p>
            Glasgow, Edinburgh and Aberdeen offer seamless departures into our
            African network.
          </p>
        </article>

        <div className="routeGraphic" aria-hidden="true">
          <div className="routeNode routeNodeStart">Scotland</div>
          <div className="routeLine" />
          <div className="routeNode routeNodeMid">Africa</div>
          <div className="routeLine" />
          <div className="routeNode routeNodeEnd">Global</div>
        </div>

        <article className="routeCard alt">
          <span>Destination cluster</span>
          <h3>African focus</h3>
          <p>
            Access growth markets with elevated service and consistent schedules
            for travellers across continents.
          </p>
        </article>
      </div>
    </section>
  );
}
