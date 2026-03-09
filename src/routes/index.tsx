import { createFileRoute, Link } from '@tanstack/react-router'
import { StarShape, LEDShape, SwitchShape, ChipShape, BlobShape, ZigZag } from '../components/Shapes'
import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"
import '../app.css'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const projects = useQuery(api.projects.getProjects);

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
            {!projects ? (
              <p style={{ gridColumn: '1/-1', textAlign: 'center' }}>Initializing systems...</p>
            ) : projects.length === 0 ? (
              <p style={{ gridColumn: '1/-1', textAlign: 'center' }}>No active projects detected.</p>
            ) : (
              projects.map((project) => (
                <div key={project._id} class="project-card neo-card">
                  <div>
                    <span class="project-tag">{project.tag}</span>
                    <h3 class="project-name">{project.title}</h3>
                    <p class="project-desc">{project.desc}</p>
                  </div>
                  <div style={{ marginTop: '2rem' }}>
                    <Link 
                      to="/projects/$projectId" 
                      params={{ projectId: project._id }}
                      className="neo-button" 
                      style={{ width: '100%', background: 'white', display: 'block', textAlign: 'center', textDecoration: 'none' }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            )}
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
