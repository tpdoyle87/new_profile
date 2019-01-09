import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import 'animate.css'


import './styles/styles.scss';
import Router from './routers/Router'
import HttpsRedirect from 'react-https-redirect'

const HttpsApp = () => (
  <HttpsRedirect>
    <Router />
  </HttpsRedirect>
)


ReactDOM.render(<HttpsApp />, document.getElementById('root'));
