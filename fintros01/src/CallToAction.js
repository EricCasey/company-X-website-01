import React, {
  Component
} from 'react';
import './App.css';
import './VidHead.css'
import './CallToAction.css'

class CallToAction extends Component {
  render() {
    return (
      <div id="action-area" >
        <div className="container">
          <div className="card">
            <div className="front">
              <h2><b>Completely Anonymous</b></h2>
              <h2>Job Introductions For</h2>
              <ul id="word-list">
                <li>Finance Superstars</li>
                <li>Investment Bankers</li>
                <li>Hedge Fund Analysts</li>
                <li>Private Equity</li>
                <li>Accountants</li>
              </ul>
              <div className="signup-flipper" id="front-flip">Signup</div>
            </div>
            <div className="back" id="signupForm">
              <div id="progress">progress bar</div>
              <form>
                <div className="col-md-6">
                left
                </div>
                <div className="col-md-6">
                right
                </div>
              </form>
              <div className="signup-flipper">
              exit
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction;
