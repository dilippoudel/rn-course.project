import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/commons'
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
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
    return(
      <Provider store = {createStore(reducers)}>
      <View>
        <Header headerText = "LogIn Form"/>
        <LoginForm/>
      </View>
       
      </Provider>
    )
  }
}
export default App;
