export default function Header() {
  return (
    <header className="siteHeader">
      <a className="brand" href="#book">
        <span className="brandMark">S</span>
        <span className="brandText">
          <strong>SLA</strong>
          <small>AIRLINES</small>
        </span>
      </a>

      <nav aria-label="Primary navigation">
        <a href="#book">Book</a>
        <a href="#destinations">Destinations</a>
        <a href="#experience">Experience</a>
        <a href="#cargo">Cargo</a>
        <a href="#investors">Investors</a>
      </nav>

      <button className="signInButton" type="button">
        Sign in
      </button>
    </header>
  );
}
