import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,600');
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #4E443E;
  }
`

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
