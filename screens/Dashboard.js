//import liraries
import React, { Component } from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import {LineChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

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
        
        const LightIcon = settings['Light'].icon;
        const ACIcon = settings['AC'].icon;
        const TemperatureIcon = settings['Temperature'].icon;
        const FanIcon = settings['Fan'].icon;
        const WiFiIcon = settings['WiFi'].icon;
        const ElectricityIcon = settings['Electricity'].icon;
        const data = [10, 20, 40, 20, 50, 60, 80, 90];

     
        return (

            <Block style={styles.dashboard}>
                <Block column style={{backgroundColor: 'white'}}>
                <Text welcome>Welcome</Text>
                <Text name>John Doe</Text>
            </Block>
                <Block row style={{paddingVertical: 10,}}>
                 <Block flex={1.5 } row style={{alignItems:  'center',}}> 
                     <Text h1 height={140}>34</Text>
                     <Text h1 size={34} height={80} light style={{letterSpacing: 0.1}}>°C</Text>
                 </Block>
                  <Block flex={1} column >
                    <Text caption >Humidity</Text>
                   
                   <LineChart 
                   style={{flex: 1}}
                    data={data}
                    curve={shape.curveNatural}
                    yMax= {100}
                    yMin={0 }
                    svg={{stroke: theme.colors.accent, strokeWidth: 3}}
                    contentInset={{top: 20, bottom: 20}}
                   >
                   </LineChart>
                  </Block>
                </Block>
                <ScrollView showsVerticalScrollIndicator={false}>
               <Block flex={1} column space='between'>
                    <Block row space='around'>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {name: 'Light',})}>
                        <Block center middle style={styles.button}>
                            <LightIcon size={38}/>
                            <Text 
                            style={{marginTop: theme.sizes.base,}} 
                            button
                            >{settings['Light'].name}</Text>
                        </Block>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {name: 'AC',})}>
                        <Block center middle style={styles.button}>
                            <ACIcon size={38}/>
                            <Text 
                            style={{marginTop: theme.sizes.base,}} 
                            button
                            >{settings['AC'].name}</Text>
                        </Block>
                        </TouchableOpacity>
                    </Block>
                    <Block row space='around'>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {name: 'Temperature',})}>
                        <Block center middle style={styles.button}>
                            <TemperatureIcon size={38}/>
                            <Text 
                            style={{marginTop: theme.sizes.base,}} 
                            button
                            >{settings['Temperature'].name}</Text>
                        </Block>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {name: 'Fan',})}>
                        <Block center middle style={styles.button}>
                            <FanIcon size={38}/>
                            <Text 
                            style={{marginTop: theme.sizes.base,}} 
                            button
                            >{settings['Fan'].name}</Text>
                        </Block>
                        </TouchableOpacity>
                    </Block>
                    <Block row space='around'>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {name: 'WiFi',})}>
                        <Block center middle style={styles.button}>
                            <WiFiIcon size={38}/>
                            <Text 
                            style={{marginTop: theme.sizes.base,}} 
                            button
                            >{settings['WiFi'].name}</Text>
                        </Block>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Settings', {name: 'Electricity',})}>
                        <Block center middle style={styles.button}>
                            <ElectricityIcon size={38}/>
                            <Text 
                            style={{marginTop: theme.sizes.base,}} 
                            button
                            >{settings['Electricity'].name}</Text>
                        </Block>
                        </TouchableOpacity>
                    </Block>
                    </Block>
                </ScrollView>
            </Block>
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
