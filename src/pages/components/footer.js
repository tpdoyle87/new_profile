import React from 'react'
import moment from 'moment'
const Footer = () => {
  return (
    <div className="content-container">
      <div className="footer">
        <div>
          <a
            href="https://www.linkedin.com/in/tde"
            target="_blank"
            className="links"
            rel="noopener noreferrer"

          >
            Linkedin
          </a>
          <a
            href="https://github.com/tpdoyle87"
            target="_blank"
            className="links"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div>
          <p className="copyright">{'\u00A9'} {moment().format('YYYY')} Thomas Doyle-Engler</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
