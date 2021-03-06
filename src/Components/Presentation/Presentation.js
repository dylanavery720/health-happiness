import React, { Component } from 'react';
import './Presentation.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavTabs from '../NavTabs/NavTabs'

const Presentation = (props) => {
    return (
      <div className="presentation">
        <MuiThemeProvider>
          <NavTabs />
        </MuiThemeProvider>
      </div>
    );
}

export default Presentation;
