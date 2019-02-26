import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common'
class LogInForm extends Component {
    state = {email : '', password : '', error: '', loading: false}
    onButtonPress = () => {
        const {email, password} = this.state;
        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess)
        .catch(()=> {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess)
            .catch(this.onLoginFail);
        });
    }
    onLoginFail = () => {
    this.setState({error: 'Authentication Failed.', loading: false})
    }
    onLoginSuccess = () => {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }
    renderButton= ()=> {
        if(this.state.loading){
            return <Spinner size = "small"/>
        }
        return (
        <Button onPress = {this.onButtonPress}> Log In
        </Button>);

    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                    label = "Email"
                    placeholder = "user@gmail.com"
                    value = {this.state.email}
                    onChangeText = {(email) => this.setState({email})}
                    />
                </CardSection>

                <CardSection>
                <Input
                    label = "Password"
                    placeholder = "password"
                    secureTextEntry
                    value = {this.state.password}
                    onChangeText = {(password) => this.setState({password})}
                    />

                </CardSection>
                <Text style = {styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
})
export default LogInForm; 