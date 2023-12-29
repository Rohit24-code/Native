import React from 'react'
import { Text, View } from 'react-native'

class ClassComponentInNative extends React.Component {
     render(){
      return (
        <View>
            <Text style={{fontSize:30,color:"red"}}>Class Component</Text>
        </View>
      )  
     }
}

export default ClassComponentInNative