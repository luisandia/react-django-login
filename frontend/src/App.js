import React from 'react';
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


axios.defaults.baseURL =
  'http://localhost:3050/api/';

const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <div className="App">
          <Header />
          <Alerts />
          <div className="container">
            <Dashboard />
          </div>
        </div>
      </AlertProvider>
    </Provider>
  );
}

export default App;
