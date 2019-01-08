import React from 'react'
import WOW from 'wowjs';


 class Project extends React.Component {
  componentDidMount = () => {
    new WOW.WOW({
      live: false
    }).init()
  }
  render() {
    return (
      <div className="content-container">
        <a href={`${this.props.project.link}`}>
          <div className="project wow fadeIn">
            <div
              className="upper-card"
              style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${this.props.project.imageUrl})`}}
            >
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default Project
