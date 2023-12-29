import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export const users = [
    {id: 1, name: 'Rohit',email:"rohit@123.com"},
    {id: 2, name: 'sam',email:"sam@123.com"},
    {id: 3, name: 'brue',email:"bruce@123.com"},
    {id: 4, name: 'peter',email:"peter@123.com"},
    {id: 5, name: 'golu',email:"petedfr@123.com"},
    {id: 6, name: 'bholu',email:"petdfer@123.com"},
    {id: 13, name: 'brue',email:"df@123.com"},
    {id: 14, name: 'peter',email:"gf@123.com"},
    {id: 15, name: 'golu',email:"sf@123.com"},
    {id: 16, name: 'bholu',email:"ewf@123.com"},
    {id: 17, name: 'brue',email:"fdsa@123.com"},
    {id: 18, name: 'peter',email:"fsda@123.com"},
    {id: 155, name: 'golu',email:"ewr@123.com"},
    {id: 164, name: 'bholu',email:"gr@123.com"},
    {id: 165, name: 'bholu',email:"fdcd@123.com"},
    {id: 177, name: 'brue',email:"sre@123.com"},
    {id: 189, name: 'peter',email:"veeeeer@123.com"},
    {id: 1553, name: 'golu',email:"vdvd@123.com"},
    {id: 1643, name: 'bholu',email:"drwe@123.com"},
  ];

const FlatListLessons = () => {
 
  return (
    <View>
      <Text>List with Flat List Component</Text>

      <FlatList
        data={users}
        renderItem={({item}: any) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item:any)=>item.id}
      />
    </View>
  );
};

const styles=StyleSheet.create({
    item:{
        fontSize:24,
        padding:20,
        color:"#fff",
        backgroundColor:"teal",
        borderColor:"black",
        borderWidth:1,
        margin:10
    }
})

export default FlatListLessons;
