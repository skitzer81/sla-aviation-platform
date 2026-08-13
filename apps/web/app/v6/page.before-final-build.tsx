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
];

export default function SLAV6() {
  return (
    <main className="slaV6">

      <div className="utilityBar">
        <div className="utilityInner">
          <span>Welcome to SLA Airlines</span>

          <div>
            <Link href="#help">Help</Link>
            <Link href="#contact">Contact us</Link>
            <span>EN ▾</span>
          </div>
        </div>
      </div>

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
            <Link href="#book">BOOK</Link>
            <Link href="/manage-booking">MANAGE</Link>
            <Link href="#experience">EXPERIENCE</Link>
            <Link href="#destinations">DESTINATIONS</Link>
            <Link href="/cargo">CARGO</Link>
            <Link href="#rewards">SLA REWARDS</Link>
            <Link href="#help">HELP</Link>
          </nav>

          <div className="headerActions">
            <button>EN⌄</button>
            <button>Sign in</button>
            <Link href="#book" className="topBookButton">
              Book
            </Link>
          </div>

        </div>
      </header>

      <section className="hero">

        <div className="heroShade" />

        <div className="heroCopy">
          <span>SLA AIRLINES</span>

          <h1>
            Scotland to
            <br />
            the world.
          </h1>

          <Link href="#book" className="heroBook">
            Book now <span>→</span>
          </Link>
        </div>

        <div id="book" className="bookingPanel">
          <div className="bookingTabs">
            <button className="activeBookingTab">
              ✈ Search flights
            </button>

            <button>
              ◆ Manage booking / Check-in
            </button>

            <button>
              ◢ What's on your flight
            </button>

            <button>
              ◷ Flight status
            </button>
          </div>

          <div className="bookingFormArea">
            <BookingWidget />
          </div>
        </div>

      </section>

      <section id="destinations" className="discover">

        <div className="sectionIntro">
          <span className="goldLine" />
          <span className="sectionMark">∞</span>
          <span className="goldLine" />

          <h2>Discover our world</h2>

          <p>
            Explore destinations and plan your next journey with SLA.
          </p>
        </div>

        <div className="destinationCards">
          {destinations.map((destination) => (
            <article
              key={destination.city}
              className="destinationCard"
              style={{ backgroundImage: `url(${destination.image})` }}
            >
              <div className="destinationOverlay" />

              <div className="destinationText">
                <span>{destination.country}</span>
                <h3>{destination.city}</h3>
                <p>{destination.code}</p>
                <button>Explore</button>
              </div>
            </article>
          ))}
        </div>

        <Link href="#all-destinations" className="allDestinations">
          View all destinations →
        </Link>

      </section>

      <section id="experience" className="experience">

        <div className="sectionIntro">
          <span className="sectionKicker">ONBOARD</span>
          <h2>The SLA experience</h2>
          <p>Comfort, service and dining throughout your journey.</p>
        </div>

        <div className="experienceGrid">

          <article className="experienceLarge">
            <div className="experienceContent">
              <span>ECONOMY</span>
              <h3>Designed around your journey.</h3>
              <p>
                Comfortable seating, complimentary dining and onboard
                entertainment.
              </p>
              <Link href="#">Explore Economy →</Link>
            </div>
          </article>

          <article className="experienceSmall premium">
            <div>
              <span>PREMIUM ECONOMY</span>
              <h3>More space.</h3>
              <p>Extra comfort and an enhanced onboard experience.</p>
            </div>
          </article>

          <article className="experienceSmall caledonia">
            <div>
              <span>SLA CALEDONIA</span>
              <h3>Our signature cabin.</h3>
              <p>Priority service and a more refined journey.</p>
            </div>
          </article>

        </div>

      </section>

      <section className="dining">

        <div className="diningVisual" />

        <div className="diningCopy">
          <span>DINING</span>
          <h2>Complimentary onboard dining.</h2>
          <p>
            Carefully prepared meals and refreshments are included on eligible
            SLA services.
          </p>
          <Link href="#">Explore dining →</Link>
        </div>

      </section>

      <section id="rewards" className="rewards">

        <div>
          <span>SLA REWARDS</span>
          <h2>Your journeys should take you further.</h2>
          <p>
            Earn recognition and benefits as you travel with SLA.
          </p>
        </div>

        <button>Coming soon</button>

      </section>

      <footer className="footer" id="help">

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

        <div className="footerSignup">
          <div>
            <h3>Stay connected</h3>
            <p>Receive SLA news, route updates and offers.</p>
          </div>

          <div className="signupForm">
            <input placeholder="Email address" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footerBottom">
          <div className="footerBrand">
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
