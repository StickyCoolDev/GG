import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/store')({
  component: Store,
})

function Store() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
          Coming Soon
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
    </div>
  )
}
