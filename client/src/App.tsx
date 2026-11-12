import { useEffect, useState } from 'react'
import './App.css'

type HealthResponse = {
  status: string
  message: string
}

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<HealthResponse>
      })
      .then(setHealth)
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : 'Failed to reach API')
      })
  }, [])

  return (
    <main className="app">
      <h1>Chess Project</h1>
      <p>React frontend talking to an Express backend.</p>

      <section className="status" aria-live="polite">
        {error && <p className="error">API error: {error}</p>}
        {health && (
          <p className="ok">
            {health.message}{' '}
            <code>{health.status}</code>
          </p>
        )}
        {!health && !error && <p>Checking API…</p>}
      </section>
    </main>
  )
}

export default App
