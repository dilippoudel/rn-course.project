import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/components/common';
import LogInForm from './src/components/LogInForm';

class App extends React.Component {
    state={ loggedIn: null};
  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyADQL-A1mtaT-vYipdIUCnmg2lNzo0TORc",
    authDomain: "authentication-c35a8.firebaseapp.com",
    databaseURL: "https://authentication-c35a8.firebaseio.com",
    projectId: "authentication-c35a8",
    storageBucket: "authentication-c35a8.appspot.com",
    messagingSenderId: "1035822666848"
    });
    firebase.auth().onAuthStateChanged((user)=> {
        if(user){
            this.setState({loggedIn: true})
        }
        else {
            this.setState({loggedIn: false})
        }
    });
  }
  renderContent = () => {
      switch (this.state.loggedIn) {
          case true :
          return <CardSection><Button onPress = {()=> firebase.auth().signOut()}>Log Out</Button></CardSection>
          case false:
          return <LogInForm/>
          default: 
          return <Spinner size = "large"/>
      }
  }
  render() {
    return (
      <View>
      <Header headerText = "Authentication" />
        
        {this.renderContent()}
        
      </View>
    );
  }
}
export default App
