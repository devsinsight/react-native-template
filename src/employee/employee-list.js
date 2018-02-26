import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, ListView } from 'react-native';
import { Card, CardSection } from '../shared/components';
import { connect } from 'react-redux';
import * as actions from './actions';
import { ListItem } from '../shared/components';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />

        );
    };
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employee.employees, (val, uid) => {
        return { ...val, uid};
    });
    return { employees };
};

export default connect(mapStateToProps, actions)(EmployeeList);
