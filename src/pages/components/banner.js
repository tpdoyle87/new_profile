import React from 'react'
import { Link } from 'react-router-dom'

class Banner extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="large-header">
          <div className="main-title">
            <p className='thin'>Devise {'\u2022'} Develop {'\u2022'} Deploy</p>
            <Link className="contact-button--secondary" to="/contact">Contact Me</Link>
          </div>
          <i className="fas fa-angle-double-down fa-2x"></i>
        </div>
      </div>
    )
  }
}

export default Banner
