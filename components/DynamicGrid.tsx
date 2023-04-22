import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DynamicGrid = () => {
  return (
    <View style={styles.parent}>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    <Text style={styles.box}>DynamicGrid</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    box:{
        width:100,
        height:100,
        padding:10,
        margin:10,
        color:"white",
        backgroundColor:"black",
    },
    parent:{
        flex:1,
        flexDirection:"row",
        flexWrap:'wrap',
    }
})

export default DynamicGrid