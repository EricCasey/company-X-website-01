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
      <a>Invite - </a>
      <a>Hire -</a>
      <a>- Signup -</a>
      </div>
      </div>
    );
  }
}

export default NavBar;
