import React, {Component} from 'react';
import { browserHistory } from 'react-router';


class HeaderNav extends Component {

  loadLink() {
    browserHistory.push('presentation')
  }


  render() {
    return (
      <div className="header-nav">
        <ul>
          <a onClick={this.loadLink.bind(this)}>Presentation</a>
          <li>About</li>
          <li>Facebook</li>
          <li>Video</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default HeaderNav;
