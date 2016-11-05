import React, {
  Component
} from 'react';
// import './App.css';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="foot-area" >
        <div className="col-md-3">
          <h3>
            Signup
          </h3>
          <ul>
            <a><li>Candidates</li></a>
            <a><li>Employers</li></a>
            <a><li>Fintro Friends</li></a>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>
            About
          </h3><ul>
            <a><li>FAQ</li></a>
            <a><li>Careers</li></a>
            <a><li>Contract</li></a>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>
            Legal
          </h3>
          <ul>
            <a><li>Privacy</li></a>
            <a><li>Terms & Conditions</li></a>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>
            Social
          </h3>
          <ul>
          <a><li>Facebook</li></a>
          <a><li>Instagram</li></a>
          <a><li>Twitter</li></a>
          </ul>
        </div>
        <div className="col-md-5">
          <h3>
            Fintros Newsletter
          </h3>
          <ul>
          <a><li>Form</li></a>
          </ul>
        </div>
        <div className="col-md-7">
        <h3>
          Contact
        </h3>
        <ul>
        <a><li>link</li></a>
        </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
