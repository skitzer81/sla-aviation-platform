export default function Experience() {
  const features = [
    {
      number: "01",
      title: "Refined comfort",
      description:
        "Spacious seating, thoughtful cabin details and a calm long-haul environment.",
    },
    {
      number: "02",
      title: "Seamless journeys",
      description:
        "Clear digital communication, efficient boarding and simplified travel management.",
    },
    {
      number: "03",
      title: "Dedicated support",
      description:
        "Responsive service shaped by local knowledge, professionalism and cultural understanding.",
    },
  ];

  return (
    <section className="experienceSection" id="experience" aria-labelledby="experience-heading">
      <div className="sectionHeading experienceHeading">
        <div className="experienceHeadingText">
          <p className="eyebrow">THE SLA STANDARD</p>
          <h2 id="experience-heading">Refined service. Meaningful hospitality.</h2>
        </div>

        <p className="experienceIntro">
          Every stage of the journey is designed around comfort, clarity and genuine care.
        </p>
      </div>

      <div className="featureGrid">
        {features.map((feature) => (
          <article key={feature.number}>
            <span>{feature.number}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>

      <p className="experienceBrandStatement">Scottish precision. African hospitality.</p>
    </section>
  );
}
