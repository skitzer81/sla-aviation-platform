export default function RouteMap() {
  return (
    <section className="routeSection" aria-labelledby="route-heading">
      <div className="routeHeader">
        <p className="eyebrow">SCOTLAND TO AFRICA</p>
        <h2 id="route-heading">One network. Two regions. New possibilities.</h2>
        <p>
          SLA is building direct, reliable and premium connections between Scotland and Africa’s most important commercial, cultural and diaspora markets.
        </p>
      </div>

      <div className="routeMapGrid">
        <article className="routeCard">
          <span>Scotland gateway</span>
          <h3>Glasgow and Edinburgh</h3>
          <p>
            Glasgow and Edinburgh provide strong access to the wider UK and European market.
          </p>
        </article>

        <div className="routeGraphic" aria-hidden="true">
          <div className="routeNode routeNodeStart">Scotland</div>
          <div className="routeLine routeLineStart" />
          <div className="routeNode routeNodeMid">Africa</div>
          <div className="routeLine routeLineEnd" />
          <div className="routeNode routeNodeEnd">Global Connections</div>
          <div className="routeAircraft">✦</div>
        </div>

        <article className="routeCard">
          <span>African network</span>
          <h3>Strategic cluster</h3>
          <p>
            Lagos, Accra, Banjul, Dakar, Nairobi and Johannesburg form the first strategic route cluster.
          </p>
        </article>
      </div>

      <div className="routeInfoGrid">
        <article className="routeInfoCard">
          <span>Future connectivity</span>
          <p>
            Expansion will be based on route economics, demand, partnerships and operational readiness.
          </p>
        </article>
      </div>
    </section>
  );
}
