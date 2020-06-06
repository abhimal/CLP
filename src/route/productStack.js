import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from '../screen/productScreen';
import {MaterialIcons} from '@expo/vector-icons';

const Stack = createStackNavigator();
function ProductStack({navigation}) {
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
             name="Product" 
             component={ProductScreen} 
             options={{ 
              title: 'Add product' ,
              headerLeft:()=>(<MaterialIcons name='arrow-back' size={28} onPress={() => navigation.goBack()} style ={{color:'#99ccff',left:10}} />)
             }}
             />
          </Stack.Navigator>
    )
}

export default ProductStack
