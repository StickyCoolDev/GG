import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"
import '../app.css'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const projects = useQuery(api.projects.getProjects);

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-area">
          <h1>ASCENT<span>SYS</span></h1>
        </div>
        <nav className="nav-links">
          <a href="#projects">Work</a>
          <a href="#about">About</a>
          <button className="minimal-button">Join Terminal</button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">ASCENT</h1>
            <p className="hero-subtitle">Electronics for the post-digital age. We build tools that survive the noise through precision engineering and refined aesthetics.</p>
          </div>
          <div className="hero-visual"></div>
        </section>

        <section id="projects" className="section-container">
          <h2 className="section-title">Selected Works</h2>
          <div className="projects-grid">
            {!projects ? (
              <p style={{ gridColumn: '1/-1', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', opacity: 0.5 }}>INITIALIZING_SYSTEMS...</p>
            ) : projects.length === 0 ? (
              <p style={{ gridColumn: '1/-1', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', opacity: 0.5 }}>NO_ACTIVE_PROJECTS_DETECTED</p>
            ) : (
              projects.map((project) => (
                <div key={project._id} className="project-card">
                  <div>
                    <span className="project-tag">{project.tag}</span>
                    <h3 className="project-name">{project.title}</h3>
                    <p className="project-desc">{project.desc}</p>
                  </div>
                  <div style={{ marginTop: '4rem' }}>
                    <Link 
                      to="/projects/$projectId" 
                      params={{ projectId: project._id }}
                      className="minimal-button"
                      style={{ width: '100%', justifyContent: 'space-between' }}
                    >
                      View Details <span>→</span>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <section id="about" className="section-container">
          <div className="manifesto-box">
            <h2 className="section-title">Manifesto</h2>
            <p className="manifesto-text">
              We reject the clean, sanitized interfaces of the corporate web. We embrace noise, distortion, and high-frequency engineering, distilled into its purest form.
            </p>
            
            <div className="manifesto-stats">
              <div className="stat-item">
                <span className="stat-label">Project Count</span>
                <span className="stat-value">{projects?.length || 0} Active</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Team Size</span>
                <span className="stat-value">02 People</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Status</span>
                <span className="stat-value">Operational</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-logo">
          <p>© 2026 ASCENT_SYSTEMS</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>EST. 2026 / BERLIN</p>
        </div>
        <div className="footer-links">
          <a href="#">X (Twitter)</a>
          <a href="#">Github</a>
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
    </div>
  )
}
