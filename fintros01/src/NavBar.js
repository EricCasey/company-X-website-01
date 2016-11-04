import React, { Component } from 'react';
import './App.css';
import './nav.css';

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
      <img
      src="http://www.fintros.com/fintros/navlogo.png"
      role="presentation"
      id="logo"
      />
      <div id="navLinks">
      <p>Invite</p>
      <p>Hire</p>
      <p>Signup</p>
      </div>
      </div>
    );
  }
}

export default NavBar;
