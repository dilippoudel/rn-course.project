import React from 'react';
import LoginForm from './components/LoginForm';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

export default class RouterComponent extends React.Component {
	render() {
		return (
			<Router>
				<Scene key="root" hideNavBar>
					<Scene key="auth">
						<Scene key="login" component={LoginForm} title="Please Login" initial />
					</Scene>
					<Scene key="main">
            <Scene
            initial 
            rightTitle = "Add"
            onRight = {()=> Actions.employeeCreate()}
            key="employeeList" 
            component={EmployeeList} 
            title="Employees" />
            <Scene key = "employeeCreate" component = {EmployeeCreate} title = "Create Employee"/>
					</Scene>
				</Scene>
			</Router>
		);
	}
}
