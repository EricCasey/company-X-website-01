import React, {
  Component
} from 'react';
import './App.css';
import './HowItWorks.css'

class HowItWorks extends Component {
  render() {
    return (
      <div className="how-area" >
      <h2>How You're Hired</h2>
        <div className="col-md-8">
        <p>1</p>
        <h3>Your anonymous profile is presented<br/> to employers in the Canadian finance industry.</h3>
        <p>2</p>
        <h3>Interview offers are sent to you with upfront salary terms.</h3>
        <p>3</p>
        <h3>Love your new job & your $500 signing bonus!</h3>
        </div>
        <div className="col-md-4" id='quote1'>
          &ensp;<i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</i>
          <br/><b>- Research Paper Quote (2017)</b>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
