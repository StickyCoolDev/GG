import { createFileRoute, Link } from '@tanstack/react-router'
import '../app.css'

export const Route = createFileRoute('/store')({
  component: Store,
})

function Store() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-area">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <h1>ASCENT<span>SYS</span></h1>
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/store" style={{ opacity: 1, fontWeight: '700' }}>Store</Link>
          <button className="minimal-button">Join Terminal</button>
        </nav>
      </header>

      <main style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ marginBottom: '4rem', opacity: 0.8 }}>
            <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="220" height="220" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="120" cy="120" r="80" stroke="var(--text-primary)" strokeWidth="0.5" opacity="0.3" />
              <path d="M40 120H200" stroke="var(--border-color)" strokeWidth="0.5" />
              <path d="M120 40V200" stroke="var(--border-color)" strokeWidth="0.5" />
              <rect x="115" y="115" width="10" height="10" fill="var(--text-primary)" />
              
              <path d="M60 60L180 180" stroke="var(--text-secondary)" strokeWidth="0.5" opacity="0.2" />
              <path d="M180 60L60 180" stroke="var(--text-secondary)" strokeWidth="0.5" opacity="0.2" />
              
              <text x="130" y="110" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-secondary)">REF_001_A</text>
              <text x="130" y="140" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-secondary)">STATUS_PENDING</text>
              
              <circle cx="120" cy="120" r="2" fill="#008f11">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: '700', marginBottom: '1rem', letterSpacing: '-0.05em' }}>
            Comming Soon
          </h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
            INITIALIZING_INVENTORY_SYSTEMS // ETA: SPRING_2026
          </p>
          
          <div style={{ marginTop: '4rem' }}>
            <Link to="/" className="minimal-button">
              ← RETURN_TO_BASE
            </Link>
          </div>
        </div>
      </main>

      <footer className="footer" style={{ marginTop: 'auto' }}>
        <div className="footer-logo">
          <p>© 2026 ASCENT_SYSTEMS</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>EST. 2026 / BANGLADESH</p>
        </div>
        <div className="footer-links">
          <a href="#">X (Twitter)</a>
          <a href="#">Github</a>
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
    </div>
  )
}
