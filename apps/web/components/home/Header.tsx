const navigation = [
  { label: "Flights", href: "#flights" },
  { label: "Manage Booking", href: "#manage-booking" },
  { label: "Cargo", href: "#cargo" },
  { label: "Flight Status", href: "#flight-status" },
  { label: "Help", href: "#help" },
];

export default function Header() {
  return (
    <header className="bookingHeader">
      <a className="bookingHeaderBrand" href="/" aria-label="SLA Airlines home">
        <span className="bookingHeaderMark">S</span>

        <span className="bookingHeaderBrandText">
          <strong>SLA</strong>
          <small>AIRLINES</small>
        </span>
      </a>

      <nav className="bookingHeaderNav" aria-label="Main navigation">
        {navigation.map((item, index) => (
          <a
            key={item.href}
            className={index === 0 ? "bookingHeaderNavActive" : ""}
            href={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="bookingHeaderActions">
        <button className="bookingLanguageButton" type="button">
          EN⌄
        </button>

        <span className="bookingHeaderDivider" aria-hidden="true" />

        <button className="bookingSignInButton" type="button">
          Sign in
        </button>

        <a className="bookingBookButton" href="#booking">
          Book
        </a>
      </div>
    </header>
  );
}
