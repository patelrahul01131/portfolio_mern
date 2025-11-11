import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div>
          <h1>Hi, I'm Rahul Patel</h1>
          <p className="lead">Web Developer — building modern web experiences with React & Node</p>
          <a href="#projects" className="btn">See my work</a>
        </div>
        <div className="hero-card">
          <div className="stat">
            <h3>2+</h3>
            <p>Projects</p>
          </div>
          <div className="stat">
            <h3>Full</h3>
            <p>Stack</p>
          </div>
        </div>
      </div>
    </section>
  )
}
