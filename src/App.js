import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
        <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
