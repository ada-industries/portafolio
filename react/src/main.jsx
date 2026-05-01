import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  const nombres = ['Emilio', 'Gabriel', 'Felipe']

  return (
    <main className="container">
      <h1>Plantilla Base en React</h1>
      <p>Arquitectura inicial simple para escalar tu proyecto.</p>
      <ul>
        {nombres.map((nombre) => (
          <li key={nombre}>{nombre}</li>
        ))}
      </ul>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
