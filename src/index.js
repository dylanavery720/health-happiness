import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Medium from './Components/Medium/Medium'
import Presentation from './Components/Presentation/Presentation'
import PowerPoint from './Components/PowerPoint/PowerPoint'
import Contact from './Components/Contact/Contact'
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { IndexRoute, IndexRedirect, Router, Route, browserHistory } from 'react-router';

injectTapEventPlugin();

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to='/blog' />
      <Route path="/blog" component={Medium} />
      <Route path="/about" component={Presentation} />
      <Route path="/presentation" component={PowerPoint} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
)


ReactDOM.render(
  routes,
  document.getElementById('root')
);
