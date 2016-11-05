import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import VideoHeader from './VideoHeader.js';
import Footer from './Footer.js';
import HowItWorks from './HowItWorks.js';
import Employer from './Employer.js';
import ReferralsAndMore from './ReferralsAndMore.js'

require('bootstrap')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    calltoaction: {
      visibility: true
    }
  };
  };

  componentDidMount() {

  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <VideoHeader
        calltoaction={this.state.calltoaction.visibility}
        />
        <HowItWorks />
        <Employer />
        <ReferralsAndMore />
        <Footer/>
      </div>
    );
  }
}

export default App;
