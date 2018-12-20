import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="home-link">
          <Link to="/">Thomas</Link>
        </div>
        <div className="navbar-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Me</Link>
          <Link to="/resume">Resume</Link>
        </div>
      </div>
    )
  }
}
