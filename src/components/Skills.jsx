import React from 'react'

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'PHP']

export default function Skills(){
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map(s => (
            <div key={s} className="skill-card">{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
