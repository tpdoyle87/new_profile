import React from 'react'

import NavBar from './components/navbar'

export default class HomePage extends React.Component {
  render() {
    return(
      <div>
        <NavBar />
        <h1>WELCOME!</h1>
      </div>
    );
  }
}
