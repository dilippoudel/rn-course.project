import React from 'react';
import { StyleSheet,Text,  View} from 'react-native';
import PlaceInput from './components/PlaceInput';
import PlaceList from './components/PlaceList';

export default class App extends React.Component {
  state = {
    places: []
  }
  placeAddedHandler = (placeName) => {
    this.setState(()=>{
      return {
        places: [...this.state.places, placeName]
      }
    })
  }
	render() {
    
		return (
			<View style={styles.container}>
				<PlaceInput onPlaceAdded = {this.placeAddedHandler}/>
				<Text>List of Cities</Text>
        <PlaceList places = {this.state.places}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		padding: 40,
		justifyContent: 'flex-start',
	},
  
});
