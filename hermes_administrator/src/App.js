import React, { Component } from 'react';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { bagsReducer } from './reducers/BagsReducer';
import { scannersReducer } from './reducers/ScannersReducer';
import { userReducer } from './reducers/UserReducer';
import { flightsReducer } from './reducers/FlightsReducer';
import AppRoot from './AppRoot';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props)
  }

  render() {
    let store = createStore(this.rootReducer(), applyMiddleware(thunk))
    return (
      <Provider store={store}>
        <AppRoot/>
      </Provider>
    );
  }

  rootReducer()
  {
    return combineReducers(
        {
          bags: bagsReducer,
          scanners: scannersReducer,
          user: userReducer,
          flights: flightsReducer,
        });
  }
}

export default App;
