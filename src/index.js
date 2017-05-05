import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Medium from './Components/Medium/Medium'
import Clients from './Components/Clients/Clients'
import Presentation from './Components/Presentation/Presentation'
import Services from './Components/Services/Services'
import PowerPoint from './Components/PowerPoint/PowerPoint'
import Contact from './Components/Contact/Contact'
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { IndexRoute, IndexRedirect, Router, Route, browserHistory } from 'react-router';

injectTapEventPlugin();

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to='/about' />
      <Route path="/about" component={PowerPoint} />
      <Route path="/blog" component={Medium} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/clients" component={Clients} />
    </Route>
  </Router>
)


ReactDOM.render(
  routes,
  document.getElementById('root')
);
