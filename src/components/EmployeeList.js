import React, { Component } from 'react';
import { View, Text } from 'react-native';
class EmployeeList extends Component {
    static navigationOptions = { title: 'Employees'};

    render() {
        return (
            <View>
                <Text>Employee Lists</Text>
                <Text>Employee Lists</Text>
                <Text>Employee Lists</Text>
                <Text>Employee Lists</Text>
                <Text>Employee Lists</Text>
            </View>
        );
    }
}

export default EmployeeList;