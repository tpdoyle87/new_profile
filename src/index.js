import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import 'animate.css'
import WOW from 'wowjs';

import './styles/styles.scss';
import Router from './routers/Router'
new WOW.WOW().init()

ReactDOM.render(<Router />, document.getElementById('root'));
