import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from '.';

class ListItem extends Component {
    render() {
        const { id, name, year, color, pantone_value } = this.props.employee;
        return (
            <CardSection>
                <Text>{id}</Text>
                <Text>{name}</Text>
                <Text>{year}</Text>
                <Text>{color}</Text>
                <Text>{pantone_value}</Text>
            </CardSection>
        );
    };
}

export default ListItem;