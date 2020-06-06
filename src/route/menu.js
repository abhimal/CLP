import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { DrawerContentScrollView,  DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import {MaterialIcons,Entypo,FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons'
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper'

function CustomDrawer(props) {
    const [offline,setOffline] = React.useState(false);
    return (
        <SafeAreaView style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>

                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image 
                             source={require('../assets/unnamed.png')}
                             size={70}
                            />
                            <View style={{flexDirection:'column', marginLeft:15}}>
                                <Title style={styles.title}>Shop Name</Title>
                                <Caption style={styles.Caption}>@username</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                           <View style={styles.section}>
                                 <Paragraph style={[styles.paragraph,styles.Caption]}>80</Paragraph>
                                 <Caption style={styles.Caption}>Vistior</Caption>
                          </View>
                          <View style={styles.section}>
                                 <Paragraph style={[styles.paragraph,styles.Caption]}>120</Paragraph>
                                 <Caption style={styles.Caption}>Likes</Caption>
                          </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                      <DrawerItem 
                        icon={({color,size})=>
                         <Entypo name='shop' color={color} size={size}/>
                        }
                        label="Home"
                        onPress={() => {}}
                       />

                       <DrawerItem 
                        icon={({color,size})=>
                         <FontAwesome5 name='shopping-basket' color={color} size={size}/>
                        }
                        label="Products"
                        onPress={() => {}}
                       />

                       <DrawerItem 
                        icon={({color,size})=>
                         <FontAwesome5 name='boxes' color={color} size={size}/>
                        }
                        label="Category"
                        onPress={() => {}}
                       />

                       <DrawerItem 
                        icon={({color,size})=>
                         <FontAwesome5 name='users' color={color} size={size}/>
                        }
                        label="Coustomers"
                        onPress={() => {}}
                       />

                       <DrawerItem 
                        icon={({color,size})=>
                         <Entypo name='ticket' color={color} size={size}/>
                        }
                        label="Coupons"
                        onPress={() => {}}
                       />

                       <DrawerItem 
                        icon={({color,size})=>
                         <MaterialCommunityIcons name='settings' color={color} size={size}/>
                        }
                        label="Sttings"
                        onPress={() => {}}
                       />

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawersection}>
               <DrawerItem 
                 icon={({color,size})=>
                    <MaterialIcons name='exit-to-app' color={color} size={size}/>
                  }
                  label="Log Out"
                  onPress={() => {}}
               />
            </Drawer.Section>

        </SafeAreaView>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    drawerContent:{
        flex:1,
    },
    userInfoSection:{
        paddingLeft:20
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
    },
    Caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawersection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16

    }
})