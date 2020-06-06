import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/homeScreen';
import {MaterialIcons} from '@expo/vector-icons';
import LogoTitle from '../components/logoTitle';

const Stack = createStackNavigator();
function HomeStack({navigation}) {
    return (
          <Stack.Navigator
            screenOptions={{
             headerStyle: {
              backgroundColor: '#99ccff',
             },
             headerTintColor: '#fff',
             headerTitleStyle: {
             fontWeight: 'bold',
             },
            }}
          >
            <Stack.Screen name="Home" 
             component={HomeScreen} 
             options={{ 
               headerTitle: props => <LogoTitle {...props} /> ,
               headerLeft:()=>(<MaterialIcons name='menu' size={28} onPress={() => navigation.openDrawer()} style ={{color:'#ffff',left:10}} />),
               headerRight:()=>(<MaterialIcons name='notifications' size={28} onPress={() => navigation.goBack()} style ={{color:'#ffff',right:10}} />)
              }}
            />
          </Stack.Navigator>
    );
}

export default HomeStack;
















































































