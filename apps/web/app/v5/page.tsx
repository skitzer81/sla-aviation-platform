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
          <Link href="/v5" className="slaBrand">
            <span className="slaInfinity">∞</span>
            <span>
              <strong>SLA</strong>
              <small>AIRLINES</small>
            </span>
          </Link>

          <nav className="slaLinks">
            <Link href="/v5">BOOK</Link>
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

          <h1>Welcome aboard.</h1>

          <a href="#booking" className="heroButton">
            Book now
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
          <span>ONBOARD</span>
          <h2>Complimentary dining.</h2>
          <p>Included on eligible SLA services.</p>
        </div>

        <Link href="#experience">Explore onboard →</Link>
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
          <span>DESTINATIONS</span>
          <h2>Explore our destinations.</h2>
          <p>
            Plan your next journey.
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
          <h2>Choose how you fly.</h2>
        </div>

        <div className="experienceGrid">
          <article className="experienceCard economy">
            <span>ECONOMY</span>
            <h3>Economy</h3>
            <p>
              Comfortable travel, proper complimentary meals and thoughtful
              service.
            </p>
          </article>

          <article className="experienceCard premium">
            <span>PREMIUM ECONOMY</span>
            <h3>Premium Economy</h3>
            <p>
              Extra space and an enhanced onboard experience.
            </p>
          </article>

          <article className="experienceCard caledonia">
            <span>SLA CALEDONIA</span>
            <h3>Caledonia</h3>
            <p>
              Priority service and our most refined cabin experience.
            </p>
          </article>

          <article className="experienceCard food">
            <span>TASTE OF SLA</span>
            <h3>Dining</h3>
            <p>
              African flavours, Scottish ingredients and generous onboard
              service.
            </p>
          </article>
        </div>
      </section>

      

      <section className="story">
        <div className="sectionHeading centred">
          <span>ABOUT SLA</span>
          <h2>SLA Airlines</h2>
        </div>

        <div className="storyGrid">
          {[
            ["About us", "Discover SLA Airlines."],
            ["Our fleet", "Explore the aircraft behind your journey."],
            ["Our people", "Meet the people behind SLA."],
            ["Careers", "Build your future with us."],
            ["Sustainability", "Our approach to responsible aviation."],
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
            <a>Route map</a>
            <a>Destinations</a>
            <a>Featured routes</a>
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
