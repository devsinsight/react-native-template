import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card, CardSection, Input, Button, Spinner } from '../shared/components';

class Login extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onLogin() {
        const { email, password } = this.props;

        this.props.login({ email, password });
    }

    renderError() {
        console.log(this.props.error)
        if(this.props.error)
            return (
                <View style={styles.errorViewStyle}> 
                    <Text style={styles.errorTextStyles}>{this.props.error}</Text>
                </View>
            );
    }

    renderButton() {
        if(this.props.loading)
            return <Spinner size={'large'} />
        else
            return <Button onPress={this.onLogin.bind(this)} >
                        Login
                    </Button>
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label={'Email'}
                        placeholder={'email@gmail.com'}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email} />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label={'Password'}
                        placeholder={'password'}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                         />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    errorViewStyle: {
        backgroundColor: 'white'
    }

};

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, actions)(Login);
