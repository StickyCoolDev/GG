import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const projects = useQuery(api.projects.getProjects);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">ASCENT</h1>
          <p className="hero-subtitle">Making electronics knowledge easier to consume </p>
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
              <span className="stat-value" style={{ color: '#008f11' }}>Operational</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
