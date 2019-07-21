//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

 

import {Block, Text} from '../components';
// create a component
class Dashboard extends Component {
    render() {
        return (
            <Block style={styles.container}>
                <Text h1>34</Text>
            </Block>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

//make this component available to the app
export default Dashboard;
