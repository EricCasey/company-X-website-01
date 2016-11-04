import React, {
  Component
} from 'react';
import './App.css';
import './VidHead.css'
import CallToAction from './CallToAction.js'

class VideoHeader extends Component {
  render() {
    return (
      <div className="vid-area" >
        <CallToAction />
        <div className="homepage-hero-module" >
          <div className="video-container" >
            <div className="filter" >
            </div>
            <video autoPlay loop className="fillWidth" >
              <source src="video/Ground-Zero.mp4"
                type="video/mp4" /> Your browser does not support the video tag.I suggest you upgrade your browser.
              <source src="video/Ground-Zero.webm"
                type="video/webm" /> Your browser does not support the video tag.I suggest you upgrade your browser.
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoHeader;
