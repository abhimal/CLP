import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity,FlatList,Image } from 'react-native';
import {Entypo} from '@expo/vector-icons';
import Api from '../config/api';
import Shimmer from '../components/Shimmer';

export default class CategoryScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
        loading:false,
        body:[],
        fakedata:[{'id':'1', 'categoryImage':'https://sghjkkkk.png', 'categoryName':'item name '},
                  {'id':'2', 'categoryImage':'https://sghjkkkk.png', 'categoryName':'item name '},
                  {'id':'3', 'categoryImage':'https://sghjkkkk.png', 'categoryName':'item name '},
                  {'id':'4', 'categoryImage':'https://sghjkkkk.png', 'categoryName':'item name '},
                  {'id':'5', 'categoryImage':'https://sghjkkkk.png', 'categoryName':'item name '},
                  {'id':'6', 'categoryImage':'https://sghjkkkk.png', 'categoryName':'item name '},
                  {'id':'7', 'categoryImage':'https://sghjkkkk.png', 'categoryName':'item name '},
                  {'id':'8', 'categoryImage':'https://sghjkkkk.png', 'categoryName':'item name '},
                  {'id':'9', 'categoryImage':'https://sghjkkkk.png', 'categoryName':'item name '},
                  {'id':'10', 'categoryImage':'https://sghjkkkk.png', 'categoryName':'item name '}
                 ]
      }
}

      componentDidMount(){
         fetch(Api.categoery, {
          method: 'get',
          headers: {
            'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
            'Content-Type': 'application/json'
          }
          })
        .then((response) => response.json())
        .then((responseJson)=>{
            // console.log(responseJson)
            this.setState({
                body:responseJson,
                loading:true
            })
        })
        .catch((error) => {
            console.error(error);
         });

    }

    onPressCategory = item => {
      this.props.navigation.navigate('SubCategory', { item });
    };
  render() {
    const { body, loading, fakedata } = this.state;
    return (
     
      <View style={styles.container}>
           <FlatList
                 showsVerticalScrollIndicator={false}
                 data={loading ? body : fakedata}
                 renderItem={({ item }) => {
                 return(
                          <TouchableOpacity 
                              style={styles.list}
                              onPress={() => {this.props.navigation.navigate('SubCategory',  { screen: 'SubCategoryScreen',
                              params: { itemId: item.id },} )}}
                          >
                          <Shimmer style={styles.imagew} autoRun={true} visible={loading} >
                             <Image source={{uri:Api.domain + item.categoryImage}} 
                              style={styles.lefticon}
                             />
                          </Shimmer>

                          <Shimmer style={styles.categoery} autoRun={true} visible={loading} >
                             <Text style={styles.item}>{item.categoryName}</Text>
                          </Shimmer>

                          <View  style={[styles.righticon]}>
                            <Shimmer style={styles.icon} autoRun={true} visible={loading}>
                               <Entypo name='chevron-right' size={28} color="#003366" />
                            </Shimmer>
                          </View>

                         </TouchableOpacity>
                       )
                 }
                 
                   } 
                   keyExtractor={item => item.id.toString()}
           />     
    </View>

    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop:6,
    },
    list:{
        borderBottomColor:'#dddd',
        borderBottomWidth:1,  
        flexDirection:'row',//cros axis main axis
        // justifyContent:'center'// main row axis use in cros axis "use to align item in main axis use in flexDirection in this case is row"
        // alignItems:'center' //align item in secondoery axis in this case in cloum
      
    },
    item:{
        fontSize:20,
        padding:20,
    },
    righticon:{
        padding:20,
        position:'absolute',
        left:300,
        // alignSelf:'flex-end' //align induvisual item
    },
    lefticon:{
        padding:20,
        marginTop:8,
        width:50,
        height:50,
        marginLeft:20
    },
    imagew:{
      padding:1,
      margin:8,
      marginLeft:20,
      width:50,
      height:50
    },
    categoery:{
      margin:25,
      marginLeft:20,
    },
    icon:{
      margin:6,
      width:20,
      marginLeft:5,
    }
  });