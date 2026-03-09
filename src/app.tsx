import { useEffect, useState } from 'preact/hooks';
import './app.css';

const PROJECTS = [
  {
    id: "01",
    tag: "HARDWARE / POWER",
    name: "Custom Power Bank",
    desc: "Built to last. High-efficiency charging for the wasteland. Features ruggedized casing and solar backup."
  },
  {
    id: "02",
    tag: "PCB / DESIGN",
    name: "Neural Interconnect",
    desc: "Low-latency bridging for bio-mechanical systems. 12-layer high-density PCB design with gold finish."
  },
  {
    id: "03",
    tag: "RADIO / SIGNAL",
    name: "Ethereal Sniffer",
    desc: "Detecting the invisible spectrum of the digital ghost. SDR-based multi-band interceptor."
  }
];

// Neo Brutalist SVG Components
const StarShape = ({ color, size = 100, style }: { color: string, size?: number, style?: any }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="shape" style={style}>
    <path 
      d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" 
      fill={color} 
      stroke="#000" 
      strokeWidth="4"
    />
  </svg>
);

const LEDShape = ({ color, style }: { color: string, style?: any }) => (
  <svg width="40" height="70" viewBox="0 0 40 70" className="shape" style={style}>
    <path d="M12 50 L12 70 M28 50 L28 70" stroke="#000" strokeWidth="4" />
    <rect x="5" y="5" width="30" height="40" rx="15" fill={color} stroke="#000" strokeWidth="4" />
    <rect x="5" y="40" width="30" height="8" fill="#000" />
    <rect x="10" y="10" width="8" height="15" rx="4" fill="white" opacity="0.3" />
  </svg>
);

const SwitchShape = ({ style }: { style?: any }) => (
  <svg width="60" height="80" viewBox="0 0 60 80" className="shape" style={style}>
    <rect x="5" y="5" width="50" height="70" rx="10" fill="white" stroke="#000" strokeWidth="4" />
    <circle cx="30" cy="25" r="12" fill="var(--neo-orange)" stroke="#000" strokeWidth="4" />
    <rect x="25" y="45" width="10" height="20" rx="5" fill="#000" />
  </svg>
);

const ChipShape = ({ style }: { style?: any }) => (
  <svg width="100" height="100" viewBox="0 0 100 100" className="shape" style={style}>
    {[0, 1, 2].map(i => (
      <g key={i}>
        <rect x="0" y={20 + i * 25} width="15" height="6" fill="#000" />
        <rect x="85" y={20 + i * 25} width="15" height="6" fill="#000" />
      </g>
    ))}
    <rect x="15" y="10" width="70" height="80" rx="4" fill="#222" stroke="#000" strokeWidth="4" />
    <circle cx="25" cy="20" r="3" fill="#000" />
    <text x="50" y="55" font-family="var(--font-mono)" font-size="10" fill="white" text-anchor="middle" font-weight="bold">FWBR
      </text>
  </svg>
);

const BlobShape = ({ color, size = 150, style }: { color: string, size?: number, style?: any }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" className="shape" style={style}>
    <path 
      d="M50,20 C80,10 120,10 150,20 C180,30 190,70 180,100 C170,130 150,170 120,180 C90,190 50,180 30,150 C10,120 10,80 20,50 C30,20 40,30 50,20 Z" 
      fill={color} 
      stroke="#000" 
      strokeWidth="6"
    />
  </svg>
);

const ZigZag = ({ color, style }: { color: string, style?: any }) => (
  <svg width="200" height="40" viewBox="0 0 200 40" className="shape" style={style}>
    <path 
      d="M0 20 L25 5 L50 35 L75 5 L100 35 L125 5 L150 35 L175 5 L200 35" 
      fill="none" 
      stroke={color} 
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function App() {
  return (
    <div class="app-container">
      {/* Background Decorative Elements */}
      <div className="floating-shapes">
        <StarShape color="var(--neo-yellow)" size={120} style={{ top: '15%', left: '5%', transform: 'rotate(15deg)' }} />
        <StarShape color="var(--neo-pink)" size={80} style={{ top: '60%', right: '8%', transform: 'rotate(-20deg)' }} />
        <LEDShape color="var(--neo-lime)" style={{ top: '10%', right: '10%', transform: 'rotate(5deg)' }} />
        <LEDShape color="var(--neo-pink)" style={{ bottom: '20%', left: '5%', transform: 'rotate(-15deg)' }} />
        <SwitchShape style={{ top: '45%', left: '2%', transform: 'rotate(-10deg)' }} />
        <ChipShape style={{ bottom: '30%', right: '4%', transform: 'rotate(12deg)' }} />
        <BlobShape color="var(--neo-lime)" size={200} style={{ bottom: '10%', left: '10%', transform: 'rotate(45deg)', opacity: 0.6 }} />
        <ZigZag color="var(--neo-orange)" style={{ top: '40%', right: '15%', transform: 'rotate(10deg)' }} />
      </div>

      <header class="header">
        <div class="logo-area">
          <h1>Ascent<span>SYS</span></h1>
        </div>
        <button className="neo-button">Join Terminal</button>
      </header>

      <main>
        <section class="hero">
          <div class="hero-content">
            <h1 class="hero-title">ASCENT</h1>
            <p class="hero-subtitle">Electronics for the post-digital age. We build tools that survive the noise.</p>
            <button className="neo-button" style={{ background: 'var(--neo-yellow)', color: '#000' }}>Explore Core</button>
          </div>
          <div class="hero-visual">
            <StarShape color="var(--neo-pink)" size={250} style={{ animation: 'spin 20s linear infinite' }} />
            <div style={{ position: 'absolute', fontWeight: 900, fontSize: '3rem', color: '#000', textAlign: 'center' }}>
              RAW<br/>POWER
            </div>
          </div>
        </section>

        <section id="projects" class="section-container">
          <h2 class="section-title">Selected Works</h2>
          <div class="projects-grid">
            {PROJECTS.map((project) => (
              <div key={project.id} class="project-card neo-card">
                <div>
                  <span class="project-tag">{project.tag}</span>
                  <h3 class="project-name">{project.name}</h3>
                  <p class="project-desc">{project.desc}</p>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <button className="neo-button" style={{ width: '100%', background: 'white' }}>View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" class="section-container">
          <div className="manifesto-box">
            <h2 class="section-title" style={{ background: 'var(--neo-yellow)', transform: 'rotate(1deg)' }}>The Manifesto</h2>
            <p class="manifesto-text">
              We reject the clean, sanitized interfaces of the corporate web. We embrace noise, distortion, and high-frequency engineering.
            </p>
            
            <div style={{ 
              marginTop: '3rem', 
              background: 'var(--neo-lime)', 
              padding: '1.5rem', 
              border: 'var(--border-width) solid #000',
              borderRadius: 'var(--radius)',
              transform: 'rotate(-1deg)',
              display: 'inline-block'
            }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 900 }}>TEAM_SIZE: 02 PEOPLE</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>SMALL UNIT. MASSIVE OUTPUT.</p>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <StarShape color="var(--neo-cyan)" size={50} />
              <StarShape color="var(--neo-orange)" size={50} />
              <StarShape color="var(--neo-lime)" size={50} />
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="footer-text">
          <p>© 2026 ASCENT_SYSTEMS</p>
          <p style={{ fontSize: '2rem' }}>EST. 2026</p>
        </div>
        <div style={{ textAlign: 'right' }}>
           <button 
             className="neo-button" 
             style={{ background: 'var(--neo-pink)' }}
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
           >
             Back to Top ↑
           </button>
        </div>
      </footer>

      <div className="marquee-container">
        <div className="marquee-content">
           SYSTEMS OPERATIONAL // HIGH VOLTAGE // NOISE DETECTED // ASCENT_SYS // FEEDBACK LOOP ACTIVE // SYSTEMS OPERATIONAL // HIGH VOLTAGE // NOISE DETECTED // ASCENT_SYS // FEEDBACK LOOP ACTIVE // 
        </div>
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
