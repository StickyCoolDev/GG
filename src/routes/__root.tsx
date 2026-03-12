import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import '../app.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>ASCENT<span>SYS</span></h1>
        </Link>
      </div>
      <nav className="nav-links">
        <Link 
          to="/store" 
          activeProps={{ style: { opacity: 1, fontWeight: '700' } }}
        >
          Store
        </Link>
        <button className="minimal-button">Join Terminal</button>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-logo">
          <p>© 2026 ASCENT_SYSTEMS</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>EST. 2026 / BANGLADESH</p>
        </div>
        <div className="footer-links">
          <a href="https://x.com" target="_blank" rel="noreferrer">X (Twitter)</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">Github</a>
          <a href="#">Contact</a>
          <button 
            style={{ 
              background: 'none', 
              border: 'none', 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.7rem', 
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              marginTop: '1rem',
              textAlign: 'left',
              padding: 0
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            BACK_TO_TOP ↑
          </button>
        </div>
      </footer>

      <div className="marquee-container">
        <div className="marquee-content">
           SYSTEMS OPERATIONAL // HIGH VOLTAGE // NOISE DETECTED // ASCENT_SYS // FEEDBACK LOOP ACTIVE // SYSTEMS OPERATIONAL // HIGH VOLTAGE // NOISE DETECTED // ASCENT_SYS // FEEDBACK LOOP ACTIVE // 
        </div>
      </div>
    </>
  )
}

function RootComponent() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
