import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import VideoHeader from './VideoHeader.js';

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
      </div>
    );
  }
}

export default App;
