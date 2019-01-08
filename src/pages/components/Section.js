import React from 'react'
import { Link } from 'react-router-dom'
import WOW from 'wowjs'

const Section = (props) => {

  // useEffect(() => {
  //   new WOW.WOW().init()
  // }, [])

  return (
  <div className="experience-container-second wow fadeIn" data-Wow-Duration='1.5s'>
    <div className="section-content">
      {props.text}
      {props.button && <div className="section-content"><Link className="contact-button" to="/contact" >Contact me</Link></div> }
    </div>
  </div>
  )
}

export default Section
