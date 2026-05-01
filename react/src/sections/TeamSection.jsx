export default function TeamSection({ team }) {
  return (
    <section>
      <h2>Equipo base</h2>
      <ul className="team-list">
        {team.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
    </section>
  )
}
