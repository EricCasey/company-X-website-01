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
      {/* <h2>Anonymous</h2>
      <h2>Job Introductions For</h2>
      <ul>
        <li>Finance Superstars</li>
        <li>Investment Bankers</li>
        <li>Hedge Fund Analysts</li>
        <li>Private Equity</li>
        <li>Accountants</li>
      </ul> */}
        <div className="container">
          <div className="card">
            <div className="front">Click to flip</div>
            <div className="back">Yo, what up?</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction;
