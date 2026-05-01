import Header from './components/Header'
import ServicesSection from './sections/ServicesSection'
import TeamSection from './sections/TeamSection'
import { company, services, team } from './data/siteData'

export default function App() {
  return (
    <main className="layout">
      <Header name={company.name} tagline={company.tagline} />

      <section>
        <h2>Sobre ADA Industries</h2>
        <p>{company.description}</p>
      </section>

      <ServicesSection services={services} />
      <TeamSection team={team} />
    </main>
  )
}
