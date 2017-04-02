import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import HeaderNav from './Components/HeaderNav/HeaderNav'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory } from 'react-router';

class App extends Component {

  loadHome() {
    browserHistory.push('/')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 onClick={this.loadHome.bind(this)} className="header-title">Health and Happiness, LLC</h1>
          <img onClick={this.loadHome.bind(this)} src="images/Health01.jpg" className="header-logo"/>
          <HeaderNav />
          <h3><i>Your Premier Assisted Living Operator</i></h3>
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
