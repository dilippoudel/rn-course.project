import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import {CardSection, Input} from './commons';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions/EmployeeActions';
class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                    label = "Name"
                    value = {this.props.name}
                    placeholder = "Jane"
                    onChangeText =  {(text)=> this.props.employeeUpdate({prop: 'name', value: text}) }
                    />
                </CardSection>

                <CardSection>
                    <Input
                    label = "phone"
                    value = {this.props.phone}
                    placeholder = "555-555-5555"
                    onChangeText = {text => this.props.employeeUpdate({prop: 'phone', value: text})}
                    />
                </CardSection>


                <CardSection style = {{flexDirection: 'column'}}>
                    <Text style = {styles.pickerTextStyles}>Shift</Text>
                    <Picker
                    style = {{flex: 1}}
                    selectedValue = {this.props.shift}
                    onValueChange = {day => this.props.employeeUpdate({prop: 'shift', value: day})}
                    >
                        <Picker.Item label = "Monday" value = "Monday"/>
                        <Picker.Item label = "Tuesday" value = "Tuesday" />
                        <Picker.Item label = "Wednesday" value = "Wednesday" />
                        <Picker.Item label = "Thursday" value = "Thursday" />
                        <Picker.Item label = "Friday" value = "Friday" />
                        <Picker.Item label = "Saturday" value = "Saturday" />
                        <Picker.Item label = "Sunday" value = "Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    pickerTextStyles: {
        fontSize: 18,
        paddingLeft: 20
    }
})
const mapStateToProps = state => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);