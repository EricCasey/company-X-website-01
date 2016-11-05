import React, {
  Component
} from 'react';
import './App.css';
import './ReferralsAndMore.css'

class ReferralsAndMore extends Component {
  render() {
    return (
      <div className="refmo-area" >
        <div className="col-md-6">
          <h2>Fintro a Friend</h2>
          <p>Refer your Accounting and Finance colleagues to Fintros & earn $500<br/>each time they accept their next dream job!</p>
          <div className="refmo-button">Fintro</div>
        </div>
        <div className="col-md-6">
          <h2>Still Curious?</h2>
          <p>Read more about how Fintros' proprietary platform matches you<br/> with North America's top employers.</p>
          <div className="refmo-button">FAQ</div>
        </div>
      </div>
    );
  }
}

export default ReferralsAndMore;
