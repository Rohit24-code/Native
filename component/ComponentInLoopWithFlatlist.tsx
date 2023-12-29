import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {users} from './FlatListLessons';

const ComponentInLoopWithFlatlist = () => {
  return (
    <View>
      <Text>ComponentInLoopWithFlatlist</Text>

      <FlatList data={users} renderItem={({item}) => <UserData item={item}/>} />
    </View>
  );
};


const UserData=({item}:any)=>{
    return (
        <View style={styles.box}>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.email}</Text>
      </View>
    )
}


const styles = StyleSheet.create({
    item:{
     fontSize:24,
     color:"orange",
     flex:1,
     margin:2,
     textAlign:"center"
    },
    box:{
      flexDirection:"row",
      borderWidth:2,
      borderColor:"orange",
      margin:10,
      padding:10
    },
})
export default ComponentInLoopWithFlatlist;
