import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Touch from './App@touch';
import Desktop from './App@desktop';
import * as serviceWorker from './serviceWorker';
const DeviceDetector = require('device-detector');
const device = DeviceDetector.parse(navigator.userAgent) || {};
const type = device.type || { type: 'desktop' };

ReactDOM.render( type === 'desktop' ? <Desktop /> : <Touch />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
