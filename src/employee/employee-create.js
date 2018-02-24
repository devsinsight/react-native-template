import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Card, CardSection, Input, Button } from '../shared/components';
import { Employee } from './models/employee';

class EmployeeCreate extends Component {

    componentWillReceiveProps(newProps) {
        console.log(newProps.phone);
    }

    createEmployee() {
        const { name, phone, shift } = this.props;

        if(this.validateEmployee())
            this.props.employeeCreate(new Employee(name, phone, shift || 'Monday'));
        
    }

    validateEmployee(){
        const { name, phone, shift } = this.props;

        if(!name)
            console.log('Error, name is required');

        if(!phone)
            console.log('Error, phone is required');

        return name && phone;
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label={'Name'}
                        placeholder={'Jhon'}
                        value={this.props.name}
                        onChangeText={text => this.props.employeeSyncForm({ prop: 'name', value: text })}
                        />
                </CardSection>

                <CardSection>
                    <Input 
                        label={'Phone'}
                        placeholder={'555-555-5555'}
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeSyncForm({ prop: 'phone', value: text })}
                        />
                </CardSection>

                <CardSection>
                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.props.shift}
                        prompt={'Shift'}
                        onValueChange={day => this.props.employeeSyncForm({ prop: 'shift', value: day })}
                    >
                        <Picker.Item label={'Monday'} value={'Monday'} />
                        <Picker.Item label={'Tuesday'} value={'Tuesday'} />
                        <Picker.Item label={'Wednesday'} value={'Wednesday'} />
                        <Picker.Item label={'Thursday'} value={'Thursday'} />
                        <Picker.Item label={'Friday'} value={'Friday'} />
                        <Picker.Item label={'Saturnday'} value={'Saturnday'} />
                        <Picker.Item label={'Sunday'} value={'Sunday'} />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.createEmployee.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    pickerStyle: {
        flex: 1
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employee;

    return { name, phone, shift };
};

export default connect(mapStateToProps, actions)(EmployeeCreate);
