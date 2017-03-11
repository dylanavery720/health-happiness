import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import './Medium.css';

const Medium = (props) => {
    return (
      //put this in a 'card', box shadow
      <div className="medium-box">
        <iframe className="medium" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fshanagoldenmanagement&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" scrolling="no" allowTransparency="true"></iframe>
      </div>
    );
}

export default Medium;
