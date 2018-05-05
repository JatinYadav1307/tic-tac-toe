import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './rematchConfig'

import Home from './components/Home'

console.log('STORE', store.getState())
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={'/'} component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
