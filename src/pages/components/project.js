import React from 'react'

 class Project extends React.Component {

  render() {
    return (
      <div className="content-container">
        <a href={`${this.props.project.link}`}>
          <div className="project">
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
