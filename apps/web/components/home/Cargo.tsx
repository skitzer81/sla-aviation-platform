export default function Cargo() {
  const servicePoints = [
    "Priority handling for high-value and time-sensitive goods",
    "Temperature-controlled support where available",
    "Customs and documentation coordination",
    "Digital shipment visibility and tracking",
    "Business account support",
    "Capacity aligned with passenger and future dedicated cargo operations",
  ];

  return (
    <section className="cargoSection" id="cargo" aria-labelledby="cargo-heading">
      <div className="cargoContent">
        <div className="cargoCopy">
          <p className="eyebrow">SLA CARGO</p>
          <h2 id="cargo-heading">Reliable logistics between Scotland and Africa.</h2>
          <p className="cargoIntro">
            SLA Cargo is designed to support businesses, communities and trade with secure, responsive and digitally managed freight services.
          </p>

          <ul className="cargoList">
            {servicePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <a href="#cargo" className="cargoCta">
            Explore SLA Cargo
          </a>

          <p className="cargoSupportLine">Trade moves faster when logistics are connected.</p>
        </div>

        <div className="cargoCard" aria-hidden="true">
          <div className="cargoCardGlow" />
          <span>Connected logistics</span>
          <h3>Serious freight for Scotland–Africa trade</h3>
          <p>
            A structured cargo network built around secure handling, responsive coordination and dependable support.
          </p>

          <div className="cargoDataRow">
            <div>
              <strong>Secure handling</strong>
            </div>
            <div>
              <strong>Digital tracking</strong>
            </div>
            <div>
              <strong>Business support</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
