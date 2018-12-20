import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'normalize.css/normalize.css'

import './styles/styles.scss';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutpage';
import ContactPage from './pages/contactpage';
import ResumePage from './pages/resumepage';
import NotFound from './pages/notfound'

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/resume" component={ResumePage} />
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
)


ReactDOM.render(routes, document.getElementById('root'));
