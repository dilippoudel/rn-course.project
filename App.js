import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase';
import Router from './src/Router';
class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyAQNAlcTnz5Ek9ERRbmy-YVEyc3fh2of9c",
      authDomain: "manager-e4d68.firebaseapp.com",
      databaseURL: "https://manager-e4d68.firebaseio.com",
      projectId: "manager-e4d68",
      storageBucket: "manager-e4d68.appspot.com",
      messagingSenderId: "1002556804291"
    };
    firebase.initializeApp(config);
  }
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store = {store}>
        <Router />
      </Provider>
    )
  }
}
export default App;
