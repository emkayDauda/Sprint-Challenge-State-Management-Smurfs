import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as reducers from "../state/reducers";
import { compose, combineReducers, createStore, applyMiddleware } from "redux";
import SmurfsList from "./SmurfsList";
import SmurfForm from "./SmurfForm";


const rootReducer =  combineReducers({
  smurfs: reducers.smurfReducer
})

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);


class App extends Component {
  render() {
    return (
     <Provider store = { store } >
        <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <SmurfsList />
      </div>
     </Provider>
    );
  }
}

export default App;
