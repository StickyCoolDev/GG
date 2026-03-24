import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"

export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectDetail,
})

import type { ReactNode } from 'react' // Import ReactNode for typing children

// --- CUSTOM MARKDOWN PARSER WITH TYPES ---
interface MarkdownRendererProps {
  content: string | undefined;
}

function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) return null;

  const blocks: string[] = content.trim().split(/\n\n+/);

  const parseInline = (text: string): ReactNode[] => {
    const tokens = text.split(/(\*\*.*?\*\*|\*.*?\*|`[^`]+`|!\[[^\]]*\]\([^)]+\)|\[[^\]]+\]\([^)]+\))/g);
    
    return tokens.map((token: string, i: number) => {
      if (token.startsWith('**') && token.endsWith('**')) {
        return <strong key={i} style={{ fontWeight: 600 }}>{token.slice(2, -2)}</strong>;
      }
      if (token.startsWith('*') && token.endsWith('*')) {
        return <em key={i}>{token.slice(1, -1)}</em>;
      }
      if (token.startsWith('`') && token.endsWith('`')) {
        return (
          <code key={i} style={{ 
            background: 'rgba(128, 128, 128, 0.2)', 
            padding: '0.2rem 0.4rem', 
            borderRadius: '4px',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '0.9em'
          }}>
            {token.slice(1, -1)}
          </code>
        );
      }

      // Image Support
      const imageMatch = token.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imageMatch) {
        return (
          <img 
            key={i} 
            src={imageMatch[2]} 
            alt={imageMatch[1]} 
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              borderRadius: '8px',
              border: '1px solid var(--border-color, #333)',
              margin: '1rem 0',
              display: 'block'
            }} 
          />
        );
      }

      const linkMatch = token.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        const href = linkMatch[2];
        const isValidScheme = /^(https?:\/\/|\/|#)/.test(href);
        return (
          <a key={i} href={isValidScheme ? href : '#'} target="_blank" rel="noopener noreferrer" style={{ 
            color: 'var(--text-primary)', 
            textDecoration: 'underline',
            textUnderlineOffset: '4px'
          }}>
            {linkMatch[1]}
          </a>
        );
      }
      return <span key={i}>{token}</span>;
    });
  };

  return (
    <div className="markdown-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {blocks.map((block: string, index: number) => {
        // Headings
        if (block.startsWith('# ')) return <h1 key={index} style={{ fontSize: '2.5rem', fontWeight: 700 }}>{parseInline(block.slice(2))}</h1>;
        if (block.startsWith('## ')) return <h2 key={index} style={{ fontSize: '2rem', fontWeight: 600 }}>{parseInline(block.slice(3))}</h2>;
        if (block.startsWith('### ')) return <h3 key={index} style={{ fontSize: '1.5rem', fontWeight: 600 }}>{parseInline(block.slice(4))}</h3>;

        // Blockquotes
        if (block.startsWith('> ')) {
          return (
            <blockquote key={index} style={{ 
              borderLeft: '4px solid var(--border-color, #555)', 
              paddingLeft: '1.5rem', 
              fontStyle: 'italic',
              opacity: 0.8 
            }}>
              {parseInline(block.slice(2))}
            </blockquote>
          );
        }

        // Code Blocks
        if (block.startsWith('```') && block.endsWith('```')) {
          const codeContent = block.slice(3, -3).replace(/^.*?\n/, ''); 
          return (
            <pre key={index} style={{ 
              background: 'rgba(0, 0, 0, 0.5)', 
              padding: '1.5rem', 
              borderRadius: '8px', 
              overflowX: 'auto',
              border: '1px solid var(--border-color, #333)'
            }}>
              <code style={{ fontFamily: 'var(--font-mono, monospace)' }}>{codeContent}</code>
            </pre>
          );
        }

        // Unordered Lists
        const lines = block.split('\n');
        if (lines.every((line: string) => line.trim().startsWith('- ') || line.trim().startsWith('* '))) {
          return (
            <ul key={index} style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {lines.map((line: string, i: number) => (
                <li key={i}>{parseInline(line.trim().slice(2))}</li>
              ))}
            </ul>
          );
        }

        // Paragraph
        return <p key={index} style={{ lineHeight: 1.7 }}>{parseInline(block)}</p>;
      })}
    </div>
  );
}



function ProjectDetail() {
  const { projectId } = Route.useParams()
  const project = useQuery(api.projects.getProjectById, { id: projectId as any })

  if (project === undefined) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 0' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', opacity: 0.5 }}>SCANNING_CORE...</p>
      </div>
    )
  }

  if (project === null) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 0' }}>
        <h1 className="hero-title">404</h1>
        <p className="hero-subtitle" style={{ margin: '2rem auto' }}>Project not found in the archives.</p>
        <Link to="/" className="minimal-button">Back to Base</Link>
      </div>
    )
  }

  return (
    <>
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
          <div className="manifesto-text" style={{ fontSize: '1.25rem', fontWeight: 400, color: 'var(--text-primary)' }}>
            
            {/* INJECTING THE PARSER HERE */}
            <MarkdownRenderer content={project.content} />
            
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
    </>
  )
}
