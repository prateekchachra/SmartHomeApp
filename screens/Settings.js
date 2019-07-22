 //import liraries
 import React, { Component } from 'react';
 import { TouchableWithoutFeedback, StyleSheet, Slider } from 'react-native';
 

 import {theme} from '../constants';
import {Block, Text, PanSlider} from '../components';
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
              
         } 



    }
    state = {
        direction : 54,
        speed: 12,
    }


    renderController(){
        return(
            <Block flex={1} center style={styles.controller}>
                <Text white>34</Text>
                <Block flex={0.8} style={[styles.controllerOverlay]}/>
            </Block>
        )
    }
     render() {

        const {navigation, settings} = this.props;
        const name = navigation.getParam('name');

        const Icon = settings[name].icon;

         return (
             <Block flex={1} style={styles.settings}>
                <Block flex= {1} row>
                    <Block column>
                        <Icon size={38} color={theme.colors.gray2} />
                        <Block flex={1.2 } row style={{alignItems:  'center',}}> 
                            <Text h1 height={140}>34</Text>
                            <Text h1 size={34} height={80} light style={{letterSpacing: 0.1}}>°C</Text>
                        </Block>
                        <Text caption>{name}</Text>
                      </Block>
                      <Block flex={1} center>
                        <PanSlider  />
                      </Block>
                </Block>
                <Block flex={1}  >
                    
                    <Block column style={{paddingTop: theme.sizes.base * 2,}}>
                        <Block row space="between">
                            
                        <Text welcome black size={16}>  Direction </Text>
                        <Text>{this.state.direction}</Text>
                        </Block>
                        <Slider
                        value={54}
                        thumbTintColor={theme.colors.accent}
                        minimumTrackTintColor={theme.colors.accent}
                        maximumTrackTintColor={theme.colors.gray2}
                        minimumValue={0} maximumValue={90}
                        onValueChange={value => this.setState({direction: parseInt(value, 10)})}/>
                    </Block>
                    <Block column style={{paddingTop: theme.sizes.base * 2,}}>
                        <Block row space="between">
                            
                        <Text welcome black size={16}>  Speed </Text>
                        <Text>{this.state.speed}</Text>
                        </Block>
                        <Slider 
                        value={12}
                           thumbTintColor={theme.colors.accent}
                           minimumTrackTintColor={theme.colors.accent}
                           maximumTrackTintColor={theme.colors.gray2}

                        minimumValue={0} maximumValue={30}
                        step={2}
                        onValueChange={value => this.setState({speed: parseInt(value, 10)})}/>
  
                    </Block>
                </Block>
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
     slider: {

     }
 });
 
 //make this component available to the app
 export default Settings;
 