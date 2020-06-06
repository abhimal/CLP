import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialIcons} from '@expo/vector-icons';
import SubCategoryScreen from '../screen/subCategoryScreen';

const Stack = createStackNavigator();
function SubCategoryStack({navigation}) {
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
             name="SubCategoryScreen" 
             component={SubCategoryScreen} 
             options={{ 
              title: 'Sub Category' ,
              headerLeft:()=>(<MaterialIcons name='arrow-back' size={28} onPress={() => navigation.goBack()} style ={{color:'#99ccff',left:10}} />)
             }}
             />
          </Stack.Navigator>
    )
}

export default SubCategoryStack
