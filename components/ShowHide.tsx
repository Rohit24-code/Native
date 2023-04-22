import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ShowHide = () => {
    const [isVisible,setIsVisible] = useState<boolean>(false)
  return (
    <View>
        {isVisible && <View style={styles.box}> 
        <Text style={{fontSize:20}}>I Am a Modal</Text>
        <Text style={{fontSize:20}}  onPress={()=>setIsVisible(!isVisible)}>X</Text>
        </View>}
        {!isVisible && <Button title={"open Modal"}  onPress={()=>setIsVisible(!isVisible)}/>}
    </View>
  )
}


const styles=StyleSheet.create({
    box:{
        padding:10,
        margin:10,
        backgroundColor:"teal",
        color:"black",
        flexDirection:"row",
        justifyContent:"space-between"
    }
})
export default ShowHide