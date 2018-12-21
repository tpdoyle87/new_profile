import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <a
          href="https://www.linkedin.com/in/tde"
          target="_blank"
          className="external-links"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/tpdoyle87"
          target="_blank"
          className="external-links"
        >
          Github
        </a>
      </div>
      <div>
        <Link to="/contact" className="internal-link">Contact Me</Link>
        <Link to="/about" className="internal-link">About Me</Link>
        <Link to="/resume" className="internal-link">Resume</Link>
        <Link exact to="/" className="internal-link">Home</Link>
      </div>
    </div>
  )
}

export default Footer
