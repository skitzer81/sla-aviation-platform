import BookingWidget from "./BookingWidget";

export default function Hero() {
  return (
    <section className="bookingHero" aria-labelledby="booking-title">
      <div className="bookingHeroBackdrop" aria-hidden="true">
        <div className="bookingHeroMountain" />
        <div className="bookingHeroSkyline" />
        <div className="bookingHeroAircraft">✈</div>
      </div>

      <div className="bookingHeroInner">
        <h1 id="booking-title">Where are you flying?</h1>

        <BookingWidget />
      </div>
    </section>
  );
}
