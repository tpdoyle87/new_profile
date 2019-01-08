import React from 'react'
import WOW from 'wowjs'

class Experience extends React.Component {
  componentDidMount = () => {
    new WOW.WOW({
      live: false
    }).init()
  }
  render() {
    return(
      <div className="experience-container wow fadeIn" >
        <div className="experience-inner-flex">
          <h4 className="company">{this.props.company}</h4>
          <h5 className="title">{this.props.title}</h5>
        </div>
        <div>
          <h6 className="time">{this.props.time}</h6>
        </div>
      </div>
    )
  }
}

export default Experience
