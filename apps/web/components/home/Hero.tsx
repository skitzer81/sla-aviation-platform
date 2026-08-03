import FlightSearch from "./FlightSearch";

export default function Hero() {
  return (
    <section className="hero" id="book">
      <div className="heroGlow" />

      <div className="heroContent">
        <div className="heroIntro">
          <p className="eyebrow brightEyebrow">SLA AVIATION GROUP</p>
          <h1>Premium journeys. Direct connections.</h1>
          <p className="heroDescription">
            A world-class airline built to connect Scotland, Africa and the globe
            with confidence, comfort and curated service.
          </p>
        </div>

        <FlightSearch />
      </div>
    </section>
  );
}
