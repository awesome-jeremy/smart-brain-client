import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// order of css matters, the latter will overwrite the former
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
