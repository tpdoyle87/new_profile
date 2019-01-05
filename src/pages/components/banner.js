import React from 'react'

class Banner extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div id="large-header" className="large-header">
          <h1 className="main-title"><span className="thin">Thomas</span> Doyle-Engler</h1>
          <i className="fas fa-angle-double-down fa-2x"></i>
        </div>
      </div>
    )
  }
}

export default Banner
