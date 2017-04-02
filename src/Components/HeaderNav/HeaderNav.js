import React, {Component} from 'react';
import { browserHistory } from 'react-router';


class HeaderNav extends Component {

  loadLink(e) {
    browserHistory.push(e.target.name)
  }


  render() {
    return (
      <div className="header-nav">
        <ul>
          <a onClick={this.loadLink.bind(this)} name="presentation">About</a>
          <a onClick={this.loadLink.bind(this)} name="services">Services</a>
          <a onClick={this.loadLink.bind(this)} name="clients">Clients</a>
          <a onClick={this.loadLink.bind(this)} name="blog">News</a>
          <a onClick={this.loadLink.bind(this)} name="contact">Contact</a>
        </ul>
      </div>
    );
  }
}

export default HeaderNav;
