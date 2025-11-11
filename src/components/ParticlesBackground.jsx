import React from "react";
import "./particles.css";

export default function ParticlesBackground() {
  return (
    <div className="particles-bg">
      {Array.from({ length: 40 }).map((_, i) => (
        <span key={i} className="particle"></span>
      ))}
    </div>
  );
}
