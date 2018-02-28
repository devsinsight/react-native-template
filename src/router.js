import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import Login from './account/login';
import Home from './home/home';
import EmployeeList from './employee/employee-list';
import EmployeeCreate from './employee/employee-create';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key={'root'} hideNavBar >
                <Scene key={'auth'}>
                    <Scene key={'login'} title={'Login'} component={Login} initial />
                </Scene>
                <Scene key={'main'}  >
                    <Scene key={'home'} title={'Home'} component={Home} rightTitle="Employees" onRight={() => Actions.employeeList()}  />
                    <Scene key={'employeeList'} title={'Employee List'} component={EmployeeList} rightTitle="Add" onRight={() => Actions.employeeCreate()} />
                    <Scene key={'employeeCreate'} title={'Employee Create'} component={EmployeeCreate} />
                </Scene>       
            </Scene>
        </Router>        
    );
};

export default RouterComponent;

