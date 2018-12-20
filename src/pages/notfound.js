import React, { Component } from 'react'

import NavBar from './components/navbar'

export default class NotFound extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <h1>Oops! Something went Wrong!</h1>
      </div>
    )
  }
}
