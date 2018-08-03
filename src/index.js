import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Sidebar from './components/sidebar.js';

ReactDOM.render(<App />, document.getElementById('map'));
ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));

registerServiceWorker();


