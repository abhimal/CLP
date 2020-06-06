import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity,FlatList } from 'react-native';
import {Entypo} from '@expo/vector-icons';
import Api from '../config/api';
import Shimmer from '../components/Shimmer';



export default class SubCategoryScreen extends Component {
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

    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({
                loading:false
            })
            const { itemId } = this.props.route.params;
            fetch(Api.categoery+itemId+'/',{
                method: 'get',
                headers: {
                  'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
                  'Content-Type': 'application/json'
                }
                })
            .then((response) => response.json())
            .then((jsonresponce)=>{
                // console.log(jsonresponce)
                this.setState({
                    body:jsonresponce,
                    loading:true
                })
            })
            .catch((error) => {
                console.error(error);
             });
        });
      }

      componentWillUnmount() {
        this._unsubscribe();
      }

    onPressCategory = item => {
      this.props.navigation.navigate('SubCategory', { item });
    };
    render() {
        const { body, loading, fakedata } = this.state;
        return (
            <View style={styles.container}>
      <FlatList
              data={loading ? body : fakedata}
              renderItem={({ item }) => 
              <TouchableOpacity 
                 style={styles.list}
                 onPress={() => this.onPressCategory(item)}
                >
                    <Shimmer style={styles.categoery} autoRun={true} visible={loading} >
                      <Text style={styles.item}>{item.subCategotyName}</Text>
                    </Shimmer>
                    <View  style={[styles.righticon]}>
                        <Shimmer style={styles.icon} autoRun={true} visible={loading}>
                            <Entypo name='chevron-right' size={28} color="#003366" />
                        </Shimmer>
                    </View>
               </TouchableOpacity>
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
        flexDirection:'row',
    },
    item:{
        fontSize:20,
        padding:20,
    },
    righticon:{
        padding:20,
        position:'absolute',
        marginLeft:300
    },
    lefticon:{
        padding:20,
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