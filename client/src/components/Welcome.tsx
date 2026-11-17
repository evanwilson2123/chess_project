import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'

const HISTORY_PREVIEW = [
  { id: 'g1', opponent: 'Stockfish · Level 5', result: 'Win', moves: '1.e4 c5 2.Nf3 d6 3.Bb5+' },
  { id: 'g2', opponent: 'Stockfish · Level 8', result: 'Loss', moves: '1.d4 Nf6 2.c4 e6 3.Nc3 Bb4' },
  { id: 'g3', opponent: 'Stockfish · Level 3', result: 'Draw', moves: '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5' },
]

const SCORES = [
  { name: 'Mira Chen', rating: 1842, record: '24–8–3' },
  { name: 'Jonah Reed', rating: 1766, record: '19–11–5' },
  { name: 'Ava Okonkwo', rating: 1710, record: '31–14–2' },
  { name: 'Leo Park', rating: 1688, record: '12–6–4' },
]

function Welcome() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginNote, setLoginNote] = useState<string | null>(null)

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim() || !password.trim()) {
      setLoginNote('Enter an email and password to continue.')
      return
    }
    setLoginNote('Sign-in will connect once auth is wired up.')
  }

  return (
    <div className="welcome-page">
      <header className="welcome-hero">
        <div className="welcome-hero__board" aria-hidden="true">
          <div className="welcome-hero__grid" />
          <svg className="welcome-hero__piece" viewBox="0 0 120 160" role="img">
            <title>Knight</title>
            <path
              fill="currentColor"
              d="M86 148H34c-4 0-7-3-7-7v-6c0-18 10-28 22-36-10-4-22-14-26-30-2-8 2-16 10-18 4-14 16-24 30-26 2-6 8-10 14-10 8 0 14 6 14 14 0 2 0 4-2 6 12 6 20 18 20 32 0 10-4 18-10 24 8 6 14 16 14 28v22c0 4-3 7-7 7zM52 42c-8 2-14 10-14 18 0 10 8 18 18 22 4-8 12-14 22-16-2-12-10-22-26-24z"
            />
          </svg>
        </div>

        <div className="welcome-hero__copy">
          <p className="welcome-brand">Chess Project</p>
          <h1>Train against Stockfish. Relive every move.</h1>
          <p className="welcome-lede">
            Log in, challenge the engine, scrub through your games, and climb the board against other players.
          </p>
          <div className="welcome-cta">
            <a className="welcome-btn welcome-btn--primary" href="#login">
              Log in
            </a>
            <Link className="welcome-btn welcome-btn--ghost" to="/play">
              Play Stockfish
            </Link>
          </div>
        </div>
      </header>

      <section className="welcome-section welcome-login" id="login" aria-labelledby="login-heading">
        <div className="welcome-section__intro">
          <h2 id="login-heading">Log in</h2>
          <p>Pick up where you left off — your games, ratings, and unfinished matches stay with your account.</p>
        </div>
        <form className="welcome-login__form" onSubmit={handleLogin}>
          <label>
            Email
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </label>
          <button className="welcome-btn welcome-btn--primary" type="submit">
            Sign in
          </button>
          {loginNote && (
            <p className="welcome-login__note" role="status">
              {loginNote}
            </p>
          )}
        </form>
      </section>

      <section className="welcome-section" aria-labelledby="history-heading">
        <div className="welcome-section__intro">
          <h2 id="history-heading">Game history, move by move</h2>
          <p>Open a finished game and step through the line — every capture, check, and blunder still on the board.</p>
        </div>
        <ul className="welcome-history">
          {HISTORY_PREVIEW.map((game) => (
            <li key={game.id}>
              <Link to={`/history/${game.id}`} className="welcome-history__row">
                <span className="welcome-history__meta">
                  <span className="welcome-history__opponent">{game.opponent}</span>
                  <span className={`welcome-history__result welcome-history__result--${game.result.toLowerCase()}`}>
                    {game.result}
                  </span>
                </span>
                <span className="welcome-history__moves">{game.moves}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link className="welcome-text-link" to="/history">
          Browse full history
        </Link>
      </section>

      <section className="welcome-section welcome-scores" aria-labelledby="scores-heading">
        <div className="welcome-section__intro">
          <h2 id="scores-heading">Other players’ scores</h2>
          <p>See who’s climbing the ladder — ratings and recent records from the same Stockfish arena.</p>
        </div>
        <ol className="welcome-scores__list">
          {SCORES.map((player, index) => (
            <li key={player.name}>
              <span className="welcome-scores__rank">{index + 1}</span>
              <span className="welcome-scores__name">{player.name}</span>
              <span className="welcome-scores__rating">{player.rating}</span>
              <span className="welcome-scores__record">{player.record}</span>
            </li>
          ))}
        </ol>
        <Link className="welcome-text-link" to="/scores">
          View all scores
        </Link>
      </section>
    </div>
  )
}

export default Welcome
