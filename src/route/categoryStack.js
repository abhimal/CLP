import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../screen/categoryScreen';
import {MaterialIcons} from '@expo/vector-icons';

const Stack = createStackNavigator();
function CategoryStack({navigation}) {
    return (
        <Stack.Navigator
            screenOptions={{
             headerStyle: {
             backgroundColor: '#ffff',
            },
            headerTintColor: '#99ccff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
           }}
          >
            <Stack.Screen 
             name="Category" 
             component={CategoryScreen} 
             options={{ 
              title: 'Select Category' ,
              headerLeft:()=>(<MaterialIcons name='arrow-back' size={28} onPress={() => navigation.goBack()} style ={{color:'#99ccff',left:10}} />)
             }}
             />
          </Stack.Navigator>
    )
}

export default CategoryStack
