//import liraries
import React, { Component } from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
 
import {theme} from '../constants';
import {Block, Text} from '../components';
import mocks from '../settings';


// create a component
class Dashboard extends Component {

    static navigationOptions = {
        headerStyle: {
            borderBottomColor: 'transparent',
            shadowColor: 'transparent',
            shadowOffset: {
                height: 0,
            },
            elevation: 0,
            height: 50,
        } 

    }
    render() {
        const {navigation, settings} = this.props;    
        return (

            <ScrollView style={styles.dashboard}>
                <Block column style={{backgroundColor: 'white'}}>
                <Text welcome>Welcome</Text>
                <Text name>John Doe</Text>
            </Block>
                <Block row style={{paddingVertical: 10,}}>
                 <Block flex={1.2 } row style={{alignItems:  'center',}}> 
                     <Text h1 height={140}>34</Text>
                     <Text h1 size={34} height={80} light style={{letterSpacing: 0.1}}>°C</Text>
                 </Block>
                  <Block flex={1} column>
                    <Text caption >Humidity</Text>
                    <Text >Chart</Text>
                  </Block>
                </Block>
               <Block flex={1} column space='between'>
                    <Block row space='around'>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {name: 'Light',})}>
                        <Block center middle style={styles.button}>
                            {settings['Light'].icon}
                            <Text button>{settings['Light'].name}</Text>
                        </Block>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {name: 'AC',})}>
                        <Block center middle style={styles.button}>
                            {settings['AC'].icon}
                            <Text button>{settings['AC'].name}</Text>
                        </Block>
                        </TouchableOpacity>
                    </Block>
                    <Block row space='around'>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {name: 'Temperature',})}>
                        <Block center middle style={styles.button}>
                            {settings['Temperature'].icon}
                            <Text button>{settings['Temperature'].name}</Text>
                        </Block>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {name: 'Fan',})}>
                        <Block center middle style={styles.button}>
                            {settings['Fan'].icon}
                            <Text button>{settings['Fan'].name}</Text>
                        </Block>
                        </TouchableOpacity>
                    </Block>
                    <Block row space='around'>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {name: 'WiFi',})}>
                        <Block center middle style={styles.button}>
                            {settings['WiFi'].icon}
                            <Text button>{settings['WiFi'].name}</Text>
                        </Block>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {name: 'Electricity',})}>
                        <Block center middle style={styles.button}>
                            {settings['Electricity'].icon}
                            <Text button>{settings['Electricity'].name}</Text>
                        </Block>
                        </TouchableOpacity>
                    </Block>
                    </Block>
             
            </ScrollView>
        );
    }
}

Dashboard.defaultProps = {
    settings: mocks,

}


const styles = StyleSheet.create({
    dashboard: {
        padding: 14,   
        flex: 1,
    },
    button: {
        backgroundColor:  theme.colors.button,
        width: 130,
        height: 130,
        borderRadius: 65,
        marginVertical: 5,
    }

});

//make this component available to the app
export default Dashboard;
