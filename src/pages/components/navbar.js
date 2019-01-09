import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="navbar">
          <div className="home-link">
            <Link
              to="/"
              className="navbar-link"
            >
              Thomas Doyle-Engler
            </Link>
          </div>
          <div className="navbar-links">
            <NavLink
              exact to="/"
              className="navbar-link"
              activeClassName="active"
            >
              Work
            </NavLink>
            <NavLink
              to="/about"
              className="navbar-link"
              activeClassName="active"
            >
              About
            </NavLink>
            <Link
              to="/contact"
              className="navbar-link contact-button"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
