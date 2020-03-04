import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import { Dashboard } from './components/leads/Dashboard';

import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';
import AlertTemplate from 'react-alert-template-basic';
import { Provider as AlertProvider } from 'react-alert';
import Alerts from './layout/Alerts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Register } from './components/accounts/Register';
import  Login  from './components/accounts/Login';
import PrivateRoute from './components/common/PrivateRoute';
import { loadUser } from './redux/actions/authAction';


axios.defaults.baseURL =
  'http://localhost:3050/api/';

const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

function App() {

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    store.dispatch(loadUser());
  });
  return (
    <Router>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <div className="App">
            <Header />
            <Alerts />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </div>
        </AlertProvider>
      </Provider>
    </Router>
  );
}

export default App;
