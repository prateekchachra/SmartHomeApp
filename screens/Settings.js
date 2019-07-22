 //import liraries
 import React, { Component } from 'react';
 import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
 

 import {theme} from '../constants';
import {Block, Text} from '../components';
import mocks from '../settings';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


 // create a component
 class Settings extends Component {

    static navigationOptions= {
        headerLeft: ({onPress} ) => 
         (<Block>
             <TouchableWithoutFeedback onPress={() => onPress()}>
                <FontAwesome size={25} color={'black'}
                name="arrow-left"/>
             </TouchableWithoutFeedback>
         </Block>),
         headerLeftContainerStyle: {
             paddingLeft: theme.sizes.base
         },
         headerStyle: {
             borderBottomColor: 'transparent',
             elevation: 0,
             height: 50,
         } 



    }

     render() {

        const {navigation, settings} = this.props;
        const name = navigation.getParam('name');
         return (
             <Block flex={1} style={styles.settings}>
                 <Text>Settings for {name}</Text>
             </Block>
         );
     }
 }
 

 Settings.defaultProps = {
     settings: mocks,
 }
 // define your styles
 const styles = StyleSheet.create({
     settings: {
         flex: 1,
         padding: theme.sizes.base * 2,
     },
 });
 
 //make this component available to the app
 export default Settings;
 