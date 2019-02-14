import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

class PlaceInput extends Component {
    state = { placeName: ''
 };
	placeNameChangeHandler = val => {
		this.setState({ placeName: val });
  };
  placeSubmitHandler = () => {
    this.props.onPlaceAdded(this.state.placeName)
  }
    render() {
        return (
            <View style={styles.inputContainer}>
            <TextInput
                style = {styles.placeInput}
                value={this.state.placeName}
                placeholder="An awesome places"
                onChangeText={this.placeNameChangeHandler}
            />
            <Button
            style = {styles.placeButton}
             title="Add" 
             onPress = {this.placeSubmitHandler}/>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    inputContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	placeInput: {
		width: '70%',
	},
	placeButton: {
		width: '30%',
  },
})

export default PlaceInput;