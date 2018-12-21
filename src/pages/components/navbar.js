import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar sticky">
        <div className="home-link">
          <Link
            to="/"
            className="navbar-link"
          >
            Thomas
          </Link>
        </div>
        <div className="navbar-links">
          <NavLink
            to="/about"
            className="navbar-link"
            activeClassName="active"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="navbar-link"
            activeClassName="active"
          >
            Contact Me
          </NavLink>
          <NavLink
            to="/resume"
            className="navbar-link"
            activeClassName="active"
          >
            Resume
          </NavLink>
        </div>
      </div>
    )
  }
}
