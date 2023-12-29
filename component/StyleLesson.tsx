import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EkStyle from './ExStyle'

const StyleLesson = () => {
  return (
    <View>

    <Text style={{fontSize:30,color:'red',backgroundColor:"teal"}}>
     inline style
    </Text>


    <Text style={styles?.textBox}>
        Styles for a single components
    </Text>

    

    <Text style={EkStyle.textBox}>
        External Style
    </Text>

    <Text style={[EkStyle.textBox,styles.textBox]}>
       using both internal and External Style
    </Text>
    
    </View>
   

  )
}

const styles =StyleSheet.create({
    textBox:{
        color:"blue",
        fontSize:25,
        backgroundColor:"lightblue",
        padding:10,
        borderRadius:10,
        textAlign:"auto",
        marginTop:10,
        borderColor:"red",
        borderWidth:2
    }
})

export default StyleLesson