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

export default function SLAHomeV3() {
  return (
    <main className="slaHome">
      <header className="slaNav">
        <div className="slaNavInner">
          <Link href="/v4" className="slaBrand">
            <span className="slaInfinity">∞</span>
            <span>
              <strong>SLA</strong>
              <small>AIRLINES</small>
            </span>
          </Link>

          <nav className="slaLinks">
            <Link href="/v4">BOOK</Link>
            <Link href="/manage-booking">MANAGE</Link>
            <Link href="#experience">EXPERIENCE</Link>
            <Link href="#destinations">DESTINATIONS</Link>
            <Link href="/cargo">CARGO</Link>
            <Link href="#help">HELP</Link>
          </nav>

          <div className="slaNavActions">
            <button>EN</button>
            <button>Sign in</button>
            <Link href="#booking" className="slaBookTop">
              Book
            </Link>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="heroOverlay" />

        <div className="heroContent">
          <span className="heroEyebrow">SLA AIRLINES</span>

          <h1>
            From Scotland.
            <br />
            To Africa.
          </h1>

          <p>
            Direct journeys shaped by Scottish excellence and African
            hospitality.
          </p>

          <a href="#booking" className="heroButton">
            Discover SLA
          </a>
        </div>
      </section>

      <section id="booking" className="bookingStage">
        <div className="bookingTabs">
          <button className="active">✈ Search flights</button>
          <button>◆ Manage booking / Check-in</button>
          <button>◢ What's on your flight</button>
          <button>◷ Flight status</button>
        </div>

        <div className="bookingInner">
          <BookingWidget />
        </div>
      </section>

      <section className="hospitalityStrip">
        <div className="hospitalityIcon">∞</div>

        <div>
          <span>SLA HOSPITALITY</span>
          <h2>Hospitality should never be an extra.</h2>
          <p>
            Generous complimentary meals and refreshments inspired by Scotland
            and Africa.
          </p>
        </div>

        <Link href="#experience">Discover our onboard experience →</Link>
      </section>

      <section className="quickLinks">
        {[
          ["Baggage", "Travel prepared"],
          ["Check-in", "Save time at the airport"],
          ["Flight status", "Live journey information"],
          ["Special assistance", "Travel with confidence"],
          ["Cargo", "Scotland–Africa logistics"],
          ["Route map", "Explore our network"],
        ].map(([title, copy]) => (
          <article key={title}>
            <div className="quickIcon">◇</div>
            <h3>{title}</h3>
            <p>{copy}</p>
            <span>Learn more →</span>
          </article>
        ))}
      </section>

      <section id="destinations" className="destinations">
        <div className="sectionHeading">
          <span>WHERE SLA TAKES YOU</span>
          <h2>Africa starts closer than you think.</h2>
          <p>
            Discover nonstop connections designed around Scotland and Africa.
          </p>
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
                <span>{destination.country}</span>
                <h3>{destination.city}</h3>
                <p>{destination.code}</p>
                <button>Explore destination</button>
              </div>
            </article>
          ))}
        </div>

        <Link href="/destinations" className="viewAll">
          Explore all destinations →
        </Link>
      </section>

      <section id="experience" className="experience">
        <div className="sectionHeading centred">
          <span>THE SLA EXPERIENCE</span>
          <h2>Where Scottish character meets African hospitality.</h2>
        </div>

        <div className="experienceGrid">
          <article className="experienceCard economy">
            <span>ECONOMY</span>
            <h3>Generous by design.</h3>
            <p>
              Comfortable travel, proper complimentary meals and thoughtful
              service.
            </p>
          </article>

          <article className="experienceCard premium">
            <span>PREMIUM ECONOMY</span>
            <h3>More room. More of everything.</h3>
            <p>
              Greater space, enhanced dining and priority features.
            </p>
          </article>

          <article className="experienceCard caledonia">
            <span>SLA CALEDONIA</span>
            <h3>Our signature way to fly.</h3>
            <p>
              Premium Scottish–African hospitality from airport to arrival.
            </p>
          </article>

          <article className="experienceCard food">
            <span>TASTE OF SLA</span>
            <h3>Food that feels like hospitality.</h3>
            <p>
              African flavours, Scottish ingredients and generous onboard
              service.
            </p>
          </article>
        </div>
      </section>

      <section className="twoWorlds">
        <div className="twoWorldsScotland">
          <span>FROM THE HIGHLANDS</span>
        </div>

        <div className="twoWorldsCentre">
          <span className="worldInfinity">∞</span>
          <h2>Two worlds. One journey.</h2>
        </div>

        <div className="twoWorldsAfrica">
          <span>TO THE HEART OF AFRICA</span>
        </div>
      </section>

      <section className="story">
        <div className="sectionHeading centred">
          <span>DISCOVER SLA</span>
          <h2>More than an airline.</h2>
        </div>

        <div className="storyGrid">
          {[
            ["Our Story", "Building a new bridge between Scotland and Africa."],
            ["Our Scotland", "The place we call home."],
            ["Our Africa", "The continent at the heart of our journey."],
            ["Our People", "Hospitality starts with people."],
            ["Our Planet", "Building responsibly for the future."],
          ].map(([title, copy]) => (
            <article key={title}>
              <div className="storyCircle" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="slaFooter">
        <div className="footerGrid">
          <div>
            <h4>Book</h4>
            <a>Book flights</a>
            <a>Group travel</a>
            <a>Special offers</a>
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
            <a>SLA Hospitality</a>
            <a>Dining</a>
            <a>Entertainment</a>
          </div>

          <div>
            <h4>Destinations</h4>
            <a>Scotland</a>
            <a>West Africa</a>
            <a>Africa</a>
            <a>Route map</a>
          </div>

          <div>
            <h4>About SLA</h4>
            <a>Our story</a>
            <a>Careers</a>
            <a>News</a>
            <a>Sustainability</a>
          </div>
        </div>

        <div className="footerNewsletter">
          <div>
            <h3>Stay connected with SLA</h3>
            <p>Route news, launch updates and special offers.</p>
          </div>

          <div className="newsletterForm">
            <input type="email" placeholder="Email address" />
            <button>Subscribe</button>
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
