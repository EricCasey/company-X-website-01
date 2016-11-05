import React, { Component } from 'react';
import './App.css';
import './nav.css';

class NavBar extends Component {
  render() {
    return (
      <div className="nav" id="header_nav">
      <img
      src="http://www.fintros.com/fintros/navlogo.png"
      role="presentation"
      id="logo"
      />
      <div id="navLinks">
      <img id="canadaEH" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1024px-Flag_of_Canada.svg.png"
      role="presentation"/>
      </div>
      <a>Fintro - </a>
      <a>Hire -</a>
      <a className="signup-flipper">- Signup -</a>
      </div>
    );
  }
}

export default NavBar;
