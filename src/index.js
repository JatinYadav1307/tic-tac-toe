import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    background-color: #4E443E;
  }
`

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
