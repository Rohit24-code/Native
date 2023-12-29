import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { users } from './FlatListLessons'

const DynamicGridLessons = () => {
  return (
    <View>
        <Text>DynamicGridLessons</Text>


         <ScrollView>
        <View style={{flex:1,flexDirection:"row",flexWrap:"wrap"}}>
            {
                users.map((item)=>(<Text style={style.box}>{item.name}</Text>))
            }
        </View>
        </ScrollView>
    </View>
   
  )
}

const style=StyleSheet.create({
    box:{
    fontSize:25,
    backgroundColor:"teal",
    color:"#fff",
    margin:5,
    padding:5,
    width:120,
    height:120,
    textAlignVertical:"center",
    textAlign:"center"
    }
})

export default DynamicGridLessons