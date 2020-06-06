import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons,Entypo,MaterialCommunityIcons} from '@expo/vector-icons';

import HomeStack from './homeStack';
import CategoryStack from './categoryStack';
import OfferScreen from '../screen/offerScreen';

const Tab = createBottomTabNavigator();

function TabStack() {
    return (
       
          <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#99ccff',
            inactiveTintColor: 'gray',
          }}
           
          >
           <Tab.Screen 
            name="Home" 
            component={HomeStack} 
            options={{
                tabBarLabel:'Shop',
                tabBarIcon:({color}) => (
                    <Entypo name='shop' size={28} color={color} />
                )
            }}
           />
           <Tab.Screen 
            name="Category" 
            component={CategoryStack} 
            options={{
                tabBarLabel:'Product',
                tabBarIcon:({color}) => (
                    <MaterialIcons name='add-box' size={35} color={color} />
                )
            }}
           />
           <Tab.Screen 
            name="Offer" 
            component={OfferScreen} 
            options={{
                tabBarLabel:'Order',
                tabBarIcon:({color}) => (
                    <MaterialCommunityIcons name='shopping' size={28} color={color} />
                )
            }}
           />
          </Tab.Navigator>
       
    )
}

export default TabStack
