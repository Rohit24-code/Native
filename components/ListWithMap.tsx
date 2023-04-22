import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { users } from './FlatListLearning'

const ListWithMap = () => {
    // without scrollview it will not scroll 
  return (
    <View>
        <ScrollView>
        {users.map((e:any)=>{
           return (
                <View>
                <Text style={styles.big}>{e.name}</Text>
                </View>
           )
        })}
        </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    big:{
        fontSize:50,
        padding:20,
        color:"white",
        backgroundColor:"black",
        marginBottom:10
    }
})

export default ListWithMap