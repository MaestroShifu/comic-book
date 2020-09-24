import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes/Routes';
import { configureStore } from './store';

export const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}
