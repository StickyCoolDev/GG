import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"
import '../app.css'

export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectDetail,
})

function ProjectDetail() {
  const { projectId } = Route.useParams()
  const project = useQuery(api.projects.getProjectById, { id: projectId as any })

  if (project === undefined) {
    return (
      <div className="app-container" style={{ textAlign: 'center', padding: '10rem 0' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', opacity: 0.5 }}>SCANNING_CORE...</p>
      </div>
    )
  }

  if (project === null) {
    return (
      <div className="app-container" style={{ textAlign: 'center', padding: '10rem 0' }}>
        <h1 className="hero-title">404</h1>
        <p className="hero-subtitle" style={{ margin: '2rem auto' }}>Project not found in the archives.</p>
        <Link to="/" className="minimal-button">Back to Base</Link>
      </div>
    )
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-area">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>ASCENT<span>SYS</span></h1>
          </Link>
        </div>
        <Link to="/" className="minimal-button">Back to Base</Link>
      </header>

      <main>
        <div className="hero">
          <div className="hero-content">
            <span className="project-tag">{project.tag}</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>{project.title}</h1>
            <p className="hero-subtitle">{project.desc}</p>
          </div>
          <div className="hero-visual"></div>
        </div>

        <section className="section-container">
          <div style={{ maxWidth: '800px' }}>
            <h2 className="section-title">Analysis</h2>
            <div className="manifesto-text" style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-primary)' }}>
              {project.content}
            </div>
          </div>
        </section>

        <section className="section-container" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '6rem' }}>
          <div className="manifesto-stats">
            <div className="stat-item">
              <span className="stat-label">Project ID</span>
              <span className="stat-value">{projectId.slice(0, 8)}...</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Classification</span>
              <span className="stat-value">{project.tag}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">System Date</span>
              <span className="stat-value">2026.03.10</span>
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
          <Link to="/">Back to index</Link>
          <a href="#">Github</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  )
}
