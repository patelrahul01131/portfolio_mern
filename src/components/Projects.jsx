import React from 'react'

const projects = [
  {
    title: 'Police Feedback System',
    desc: 'A feedback portal for police stations to collect and manage public feedback.',
    tech: ['CSS','REACT','NODE'],
    link:'https://github.com/patelrahul01131/police-feedback-portal-MERN/tree/master'
  },
  {
    title: 'Movie Streaming Website',
    desc: 'A demo streaming site showcasing movie listings and responsive UI.',
    tech: ['HTML','CSS','PHP'],
    link:'https://github.com/patelrahul01131/movie-streaming-website-php/tree/master'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(p => (
            <div className="project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tech">
                {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
              </div>
              <div className="project-links">
                {/* <a className="btn-small" href="#">Live</a> */}
                <a className="btn-small ghost" href={p.link}>Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
