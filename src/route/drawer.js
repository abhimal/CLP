import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './menu';
import TabStack from './tabStack';
import SubCategoryStack from'../route/subCategoryStack';


const Drawer = createDrawerNavigator();
function DrawerNav(props) {
    return (
        <NavigationContainer>
           <Drawer.Navigator
            style={{ flex: 1 }}
            drawerContent={props =><CustomDrawer {...props}/>}
            drawerStyle={{
              backgroundColor: "white",
            }}
            drawerContentOptions={{
              activeTintcolor: "white",
              inactiveTintColor: "#000",
              itemStyle: {
                paddingVertical: 10,
                paddingHorizonal: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                overflow: "hidden"
              },
              labelStyle: {
                fontSize: 16,
                marginLeft: 12,
                fontWeight: "bold"
              }
            }}
            initialRouteName="Tab"
           >
             <Drawer.Screen name="Home" component={TabStack} />
             <Drawer.Screen name="SubCategory" component={SubCategoryStack} />
           </Drawer.Navigator>
       </NavigationContainer>
    )
}

export default DrawerNav
