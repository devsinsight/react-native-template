import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './account/login';
import Home from './home/home';
import EmployeeList from './employee/employee-list';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key={'root'}  >
                <Scene key={'login'} title={'Login'} component={Login} initial />
                <Scene key={'home'} title={'Home'} component={Home} />
                <Scene key={'employeeList'} title={'Employee List'} component={EmployeeList} />
            </Scene>
        </Router>        
    );
};

export default RouterComponent;
