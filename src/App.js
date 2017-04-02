import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import HeaderNav from './Components/HeaderNav/HeaderNav'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Health and Happiness, LLC</h1>
          <h3>Your Premier Assisted Living Operator</h3>
          <HeaderNav />
        </div>
        {this.props.children}
        <div className="app-footer">
        <MuiThemeProvider>
          <Nav />
        </MuiThemeProvider>
        </div>
      </div>

    );
  }
}

export default App;
