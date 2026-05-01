export default function ServicesSection({ services }) {
  return (
    <section>
      <h2>Servicios</h2>
      <div className="grid">
        {services.map((service) => (
          <article key={service.title} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
