import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme } from './constants';


const settings = {
    'Light' : {
        
        name: 'Light',
        icon: ({size, color, ...props}) => (<MaterialCommunityIcons  
        size={size || 38}
         color={color || theme.colors.accent}
         name="lightbulb-on-outline"
          {...props}
         />)
    
    },
    'AC' : {
        
        name: 'AC',
        icon: ({size, color, ...props}) => ( <MaterialCommunityIcons  
        size={size || 38}
         color={color || theme.colors.accent}
         name="air-conditioner"
         />)
    
    },
    'Temperature' : {
        
        name: 'Temperature',
        icon:  ({size, color, ...props}) => ( <MaterialCommunityIcons  
        size={size || 38}
         color={color || theme.colors.accent}
         name="temperature-celsius"
         />)
    
    },
    'Fan' : {
        
        name: 'Fan',
        icon:  ({size, color, ...props}) => ( <MaterialCommunityIcons  
        size={size || 38}
         color={color || theme.colors.accent}
         name="fan"
         />)
    
    },
    'WiFi' : {
        
        name: 'WiFi',
        icon:  ({size, color, ...props}) => ( <FontAwesome  
        size={size || 38}
         color={color || theme.colors.accent}
         name="wifi"
         />)
    
    },
    'Electricity' : {
        
        name: 'Electricity',
        icon:  ({size, color, ...props}) => ( <MaterialIcons 
        size={size || 38}
         color={color || theme.colors.accent}
         name="power"
         />)
    
    },


};


export default settings;