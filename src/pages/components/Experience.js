import React from 'react'

const Experience = ({company, title, time}) => (
  <div className="experience-container">
    <div className="experience-inner-flex">
      <h4 className="company">{company}</h4>
      <h5 className="title">{title}</h5>
    </div>
    <div>
      <h6 className="time">{time}</h6>
    </div>
  </div>
)

export default Experience
