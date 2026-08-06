export default function Investor() {
  const pillars = [
    {
      title: "Strategic routes",
      description:
        "Focused on underserved Scotland–Africa corridors with diaspora, business, tourism and cargo potential.",
    },
    {
      title: "Premium operations",
      description:
        "A service model built around reliability, customer relevance and disciplined growth.",
    },
    {
      title: "Scalable platform",
      description:
        "SLA OS provides a shared digital foundation for passenger travel, cargo, customer service and future aviation services.",
    },
  ];

  return (
    <section className="investorSection" id="investors" aria-labelledby="investor-heading">
      <div className="investorIntro">
        <p className="eyebrow">INVESTMENT CASE</p>
        <h2 id="investor-heading">Building a focused Scotland–Africa aviation platform.</h2>
        <p className="investorIntroCopy">
          SLA Aviation Group is being developed around disciplined route selection, premium customer experience, digital-first distribution and scalable operating infrastructure.
        </p>
      </div>

      <div className="investorGrid">
        {pillars.map((pillar) => (
          <article key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </div>

      <p className="investorCredibility">Built for long-term value, not short-term headlines.</p>
      <a href="#investors" className="investorCta">
        View investor information
      </a>
    </section>
  );
}
