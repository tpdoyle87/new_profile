import React from 'react'
import { Link } from 'react-router-dom'

const Section = (props) => (
  <div className="experience-container-second wow fadeIn" data-Wow-Duration='1.5s'>
    <div className="section-content">
      {props.text}
      {props.button && <div className="section-content"><Link className="contact-button" to="/contact" >Contact me</Link></div> }
    </div>

  </div>
)

export default Section
