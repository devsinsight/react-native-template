import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from '../components';

class ListItem extends Component {
    render() {
        const { id, name, year, color, pantone_value } = this.props.employee;
        return (
            <CardSection>
                <Text style={styles.titleStyle}>{name}</Text>
            </CardSection>
        );
    };
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export { ListItem };