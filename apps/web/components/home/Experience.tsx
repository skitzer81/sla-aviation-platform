export default function Experience() {
  const features = [
    {
      number: "01",
      title: "Refined comfort",
      description:
        "Elegant cabin design, thoughtful service and premium dining crafted for long-haul travel.",
    },
    {
      number: "02",
      title: "Seamless journeys",
      description:
        "Fast connections, clear boarding and digital support across Scotland and Africa.",
    },
    {
      number: "03",
      title: "Dedicated support",
      description:
        "Local teams deliver personalised attention and reliable assistance every step of the way.",
    },
  ];

  return (
    <section className="experienceSection" id="experience">
      <div className="sectionHeading">
        <div>
          <p className="eyebrow">THE SLA STANDARD</p>
          <h2>Premium experience for every international journey.</h2>
        </div>

        <p>
          Our premium service blends Scottish refinement with African warmth across every cabin
          and connection.
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
    </section>
  );
}
