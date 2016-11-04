import React, {
  Component
} from 'react';
import './App.css';
import './VidHead.css'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="foot-area" >
        <div className="col-md-3">
          <h3>
            Signup
          </h3>
          <a>link</a>
        </div>
        <div className="col-md-3">
          <h3>
            About
          </h3>
          <a>link</a>
        </div>
        <div className="col-md-3">
          <h3>
            Legal
          </h3>
          <a>link</a>
        </div>
        <div className="col-md-3">
          <h3>
            Social
          </h3>
          <a>link</a>
        </div>
        <div className="col-md-5">
          <h3>
            Fintros Newsletter
          </h3>
          <a>Form</a>
        </div>
        <div className="col-md-7">
        <h3>
          Contact
        </h3>
        <a>link</a>
        </div>
      </div>
    );
  }
}

export default Footer;
