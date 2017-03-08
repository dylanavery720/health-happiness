import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { browserHistory } from 'react-router';
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class Nav extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (route, index) => {
    this.setState({selectedIndex: index})
    browserHistory.push(`${route}`)
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Blog"
            icon={recentsIcon}
            onTouchTap={() => this.select('blog', 0)}
          />
          <BottomNavigationItem
            label="About"
            icon={favoritesIcon}
            onTouchTap={(e) => this.select('about', 1)}
          />
          <BottomNavigationItem
            label="Resources"
            id="resources"
            icon={nearbyIcon}
            onTouchTap={(e) => this.select(e, 2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Nav;
