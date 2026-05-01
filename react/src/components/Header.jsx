export default function Header({ name, tagline }) {
  return (
    <header className="hero">
      <p className="eyebrow">Empresa</p>
      <h1>{name}</h1>
      <p>{tagline}</p>
    </header>
  )
}
