import Link from "next/link";
import BookingWidget from "@/components/booking/BookingWidget/BookingWidget";
import "./home.css";

const destinations = [
  {
    city: "Lagos",
    country: "Nigeria",
    code: "LOS",
    image:
      "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&w=1200&q=85",
  },
  {
    city: "Accra",
    country: "Ghana",
    code: "ACC",
    image:
      "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    city: "Banjul",
    country: "The Gambia",
    code: "BJL",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    code: "CPT",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function SLAV6() {
  return (
    <main className="slaV6">

      {/* TOP UTILITY BAR */}
      <div className="utilityBar">
        <div className="utilityInner">
          <div className="utilityLeft">
            <span className="saltire">🏴</span>
            <span>Proudly headquartered in Scotland</span>
            <span className="utilityDivider" />
            <span className="utilityGold">
              Connecting Africa and the world with Scottish excellence
            </span>
          </div>

          <div className="utilityRight">
            <a href="#help">Help</a>
            <span className="utilityDivider" />
            <a href="#contact">Contact us</a>
            <span className="utilityDivider" />
            <span>◉ EN⌄</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <header className="mainHeader">
        <div className="headerInner">

          <Link href="/v6" className="brand">
            <span className="brandMark">∞</span>
            <span className="brandWords">
              <strong>SLA</strong>
              <small>AIRLINES</small>
            </span>
          </Link>

          <nav className="mainNav">
            <a href="#booking">BOOK</a>
            <a href="/manage-booking">MANAGE</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#destinations">DESTINATIONS</a>
            <a href="/cargo">CARGO</a>
            <a href="#rewards">SLA REWARDS</a>
            <a href="#help">HELP</a>
          </nav>

          <div className="headerActions">
            <button type="button">Sign in</button>
            <a href="#booking" className="topBookButton">
              Book now
            </a>
          </div>

        </div>
      </header>

      {/* AIRCRAFT HERO — NO MARKETING WORDS */}
      <section className="hero">
        <div className="heroShade" />
      </section>

      {/* REAL SLA BOOKING ENGINE */}
      <section id="booking" className="bookingShell">

        <div className="bookingTabs">
          <button className="activeBookingTab" type="button">
            <span>✈</span>
            Search flights
          </button>

          <button type="button">
            <span>◆</span>
            Manage booking / Check-in
          </button>

          <button type="button">
            <span>◢</span>
            What's on your flight
          </button>

          <button type="button">
            <span>◷</span>
            Flight status
          </button>
        </div>

        <div className="bookingProductRow">
          <button className="bookingProductActive" type="button">
            Flight
          </button>

          <button type="button">
            Flight + Hotel
          </button>
        </div>

        

        <div className="realBookingWidget">
          <BookingWidget />
        </div>

      </section>

      {/* SLA SERVICES */}
      <section className="slaServices">
        <div className="servicesGrid">

          <a href="#" className="serviceItem">
            <span className="serviceSymbol">▥</span>
            <strong>Hotels</strong>
            <small>Find places to stay</small>
          </a>

          <a href="#" className="serviceItem">
            <span className="serviceSymbol">▰</span>
            <strong>Car Rental</strong>
            <small>Book your onward journey</small>
          </a>

          <a href="#" className="serviceItem">
            <span className="serviceSymbol">◇</span>
            <strong>Tours & Activities</strong>
            <small>Discover more</small>
          </a>

          <a href="#" className="serviceItem">
            <span className="serviceSymbol">☀</span>
            <strong>Holidays</strong>
            <small>Plan a complete trip</small>
          </a>

          <a href="#" className="serviceItem featuredService">
            <span className="serviceSymbol">◎</span>
            <strong>Africa Experience</strong>
            <small>Culture, places and journeys</small>
          </a>

          <a href="#" className="serviceItem">
            <span className="serviceSymbol">♙</span>
            <strong>Chauffeur Drive</strong>
            <small>Premium ground travel</small>
          </a>

          <a href="#" className="serviceItem">
            <span className="serviceSymbol">◇</span>
            <strong>Meet & Greet</strong>
            <small>Airport assistance</small>
          </a>

          <a href="#" className="serviceItem">
            <span className="serviceSymbol">▣</span>
            <strong>Airport Transfers</strong>
            <small>Door-to-airport travel</small>
          </a>

        </div>
      </section>

      {/* SLA SERVICES */}
      

      {/* DESTINATIONS */}
      <section id="destinations" className="destinationsSection">

        <div className="destinationsHeading">
          <div className="headingOrnament">
            <span />
            <strong>∞</strong>
            <span />
          </div>

          <h2>Discover our destinations</h2>
        </div>

        <div className="destinationGrid">
          {destinations.map((destination) => (
            <article
              key={destination.city}
              className="destinationCard"
              style={{
                backgroundImage: `url(${destination.image})`,
              }}
            >
              <div className="destinationShade" />

              <div className="destinationContent">
                <h3>{destination.city}</h3>
                <p>{destination.country}</p>
                <small>{destination.code}</small>

                <button type="button">
                  Explore →
                </button>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experienceSection">

        <div className="experienceHeading">
          <span>THE SLA EXPERIENCE</span>
          <h2>Choose how you fly.</h2>
        </div>

        <div className="experienceGrid">

          <article className="experienceCard economyCabin">
            <div className="experienceOverlay" />
            <div className="experienceContent">
              <span>ECONOMY</span>
              <h3>Economy</h3>
              <p>
                Comfortable seating, complimentary dining and onboard
                entertainment.
              </p>
              <a href="#">Explore Economy →</a>
            </div>
          </article>

          <article className="experienceCard premiumCabin">
            <div className="experienceOverlay" />
            <div className="experienceContent">
              <span>PREMIUM ECONOMY</span>
              <h3>Premium Economy</h3>
              <p>
                More space, enhanced dining and a more relaxed journey.
              </p>
              <a href="#">Explore Premium Economy →</a>
            </div>
          </article>

          <article className="experienceCard businessCabin">
            <div className="experienceOverlay" />
            <div className="experienceContent">
              <span>BUSINESS CLASS</span>
              <h3>Business Class</h3>
              <p>
                Priority service, premium comfort and a refined onboard
                experience.
              </p>
              <a href="#">Explore Business Class →</a>
            </div>
          </article>

        </div>

      </section>

      {/* ONBOARD EXPERIENCE */}
      <section className="onboardSection">

        <div className="onboardHeading">
          <span>ONBOARD</span>
          <h2>Your journey, considered.</h2>
        </div>

        <div className="onboardGrid">

          <article className="onboardCard diningCard">
            <div className="onboardOverlay" />
            <div className="onboardContent">
              <span>DINING</span>
              <h3>Complimentary dining</h3>
              <p>
                Meals and refreshments are included on eligible SLA services.
              </p>
              <a href="#">Explore dining →</a>
            </div>
          </article>

          <article className="onboardCard entertainmentCard">
            <div className="onboardOverlay" />
            <div className="onboardContent">
              <span>ENTERTAINMENT</span>
              <h3>Enjoy the journey</h3>
              <p>
                Films, series, music and family entertainment throughout your flight.
              </p>
              <a href="#">Explore entertainment →</a>
            </div>
          </article>

          <article className="onboardCard wifiCard">
            <div className="onboardOverlay" />
            <div className="onboardContent">
              <span>CONNECTIVITY</span>
              <h3>Stay connected</h3>
              <p>
                Wi-Fi and digital services designed to keep you connected in the air.
              </p>
              <a href="#">Explore connectivity →</a>
            </div>
          </article>

          <article className="onboardCard baggageCard">
            <div className="onboardOverlay" />
            <div className="onboardContent">
              <span>BAGGAGE</span>
              <h3>Travel with what matters</h3>
              <p>
                Clear baggage allowances for your journey.
              </p>
              <a href="#">View baggage →</a>
            </div>
          </article>

          <article className="onboardCard familyCard">
            <div className="onboardOverlay" />
            <div className="onboardContent">
              <span>FAMILIES</span>
              <h3>Made for family travel</h3>
              <p>
                Family seating, children's meals and thoughtful support throughout the journey.
              </p>
              <a href="#">Family travel →</a>
            </div>
          </article>

        </div>

      </section>

      {/* FOOTER */}
      <footer id="help" className="footer">

        <div className="footerColumns">
          <div>
            <h4>Book</h4>
            <a>Book flights</a>
            <a>Special offers</a>
            <a>Group travel</a>
            <a>Cargo</a>
          </div>

          <div>
            <h4>Manage</h4>
            <a>Manage booking</a>
            <a>Check-in</a>
            <a>Flight status</a>
            <a>Baggage</a>
          </div>

          <div>
            <h4>Experience</h4>
            <a>Cabins</a>
            <a>Dining</a>
            <a>Entertainment</a>
            <a>Special assistance</a>
          </div>

          <div>
            <h4>Destinations</h4>
            <a>Lagos</a>
            <a>Accra</a>
            <a>Banjul</a>
            <a>Route map</a>
          </div>

          <div>
            <h4>About SLA</h4>
            <a>About us</a>
            <a>Careers</a>
            <a>News</a>
            <a>Sustainability</a>
          </div>
        </div>

        <div className="footerBottom">
          <div className="footerLogo">
            <span>∞</span>
            <strong>SLA AIRLINES</strong>
          </div>

          <p>
            Privacy · Cookies · Accessibility · Terms · Contact · Sitemap
          </p>

          <small>© 2026 SLA Airlines. All rights reserved.</small>
        </div>

      </footer>

    </main>
  );
}
