import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { rootReducer } from './store';
import { Routes } from './routes/Routes';

export const App = () => {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}
