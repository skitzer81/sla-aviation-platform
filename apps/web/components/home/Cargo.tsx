export default function Cargo() {
  return (
    <section className="cargoSection" id="cargo">
      <div className="cargoContent">
        <div>
          <p className="eyebrow">CARGO</p>
          <h2>Air cargo and logistics designed for growth markets.</h2>
          <p>
            SLA Cargo delivers reliable shipments between Scotland and Africa with
            premium handling, customs support and secure tracking.
          </p>
          <ul>
            <li>Dedicated freighter capacity on key African routes</li>
            <li>Priority handling for temperature-controlled and high-value goods</li>
            <li>Integrated customs and logistics coordination</li>
          </ul>
          <button type="button">Learn more about cargo</button>
        </div>

        <div className="cargoCard" aria-hidden="true">
          <span>Fast connections</span>
          <h3>From Scotland to major African gateways</h3>
          <p>
            Modern cargo lanes that support trade, retail and critical freight with
            a premium service promise.
          </p>
        </div>
      </div>
    </section>
  );
}
