import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"
//import { Id } from "../../convex/_generated/dataModel"

import { StarShape, BlobShape } from '../components/Shapes'
import '../app.css'

export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectDetail,
})

function ProjectDetail() {
  const { projectId } = Route.useParams()
  const project = useQuery(api.projects.getProjectById, { id: projectId as any })

  if (project === undefined) {
    return (
      <div className="app-container" style={{ textAlign: 'center', padding: '5rem' }}>
        <h1 className="hero-title">SCANNING</h1>
        <p>Retrieving project data from the core...</p>
      </div>
    )
  }

  if (project === null) {
    return (
      <div className="app-container" style={{ textAlign: 'center', padding: '5rem' }}>
        <h1 className="hero-title">404</h1>
        <p>Project not found in the archives.</p>
        <Link to="/" className="neo-button" style={{ marginTop: '2rem', display: 'inline-block' }}>Back to Base</Link>
      </div>
    )
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-area">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>Ascent<span>SYS</span></h1>
          </Link>
        </div>
        <Link to="/" className="neo-button">Back to Base</Link>
      </header>

      <main style={{ padding: '4rem' }}>
        <div className="neo-card" style={{ maxWidth: '800px', margin: '4rem auto',padding: "4rem", position: 'relative' }}>
          <span className="project-tag" style={{ background: 'var(--neo-yellow)' }}>{project.tag}</span>
          <h2 className="section-title" style={{ marginTop: '1rem', fontSize: '3rem' }}>{project.title}</h2>
          <p className="project-desc" style={{ fontSize: '1.2rem', fontWeight: 700, margin: '2rem 0' }}>{project.desc}</p>
          <div className="manifesto-text" style={{ textAlign: 'left', borderTop: '4px solid #000', paddingTop: '2rem' }}>
            {project.content}
          </div>

          <div className="floating-shapes" style={{ pointerEvents: 'none' }}>
            <StarShape color="var(--neo-pink)" size={100} style={{ top: '-30px', right: '-30px', transform: 'rotate(15deg)' }} />
            <BlobShape color="var(--neo-lime)" size={150} style={{ bottom: '-50px', left: '-50px', transform: 'rotate(-10deg)', opacity: 0.5 }} />
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-text">
          <p>© 2026 ASCENT_SYSTEMS</p>
        </div>
      </footer>
    </div>
  )
}
