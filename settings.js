import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme } from './constants';


const settings = {
    'Light' : {
        
        name: 'Light',
        icon: <MaterialCommunityIcons  
        size={38}
         color={theme.colors.accent}
         name="lightbulb-on-outline"
         />
    
    },
    'AC' : {
        
        name: 'AC',
        icon: <MaterialCommunityIcons  
        size={38}
         color={theme.colors.accent}
         name="air-conditioner"
         />
    
    },
    'Temperature' : {
        
        name: 'Temperature',
        icon: <MaterialCommunityIcons  
        size={38}
         color={theme.colors.accent}
         name="temperature-celsius"
         />
    
    },
    'Fan' : {
        
        name: 'Fan',
        icon: <MaterialCommunityIcons  
        size={38}
         color={theme.colors.accent}
         name="fan"
         />
    
    },
    'WiFi' : {
        
        name: 'WiFi',
        icon: <FontAwesome  
        size={38}
         color={theme.colors.accent}
         name="wifi"
         />
    
    },
    'Electricity' : {
        
        name: 'Electricity',
        icon: <MaterialIcons 
        size={38}
         color={theme.colors.accent}
         name="power"
         />
    
    },


};


export default settings;