import React from 'react'
import { Text, TouchableHighlight, View ,StyleSheet} from 'react-native'

const StylesInButtonLessons = () => {

    //we dont use buttons here bcs we can not style it as we want it has certain restrictions so we use these
  return (
    <View style={styles.main}>
     <TouchableHighlight>
        <Text style={[styles.button,styles.success]}>Success</Text>
     </TouchableHighlight>

     <TouchableHighlight>
        <Text style={[styles.button,styles.primary]}>Primary</Text>
     </TouchableHighlight>

     <TouchableHighlight>
        <Text style={[styles.button,styles.warning]}>Warning</Text>
     </TouchableHighlight>

     <TouchableHighlight>
        <Text style={[styles.button,styles.error]}>Error</Text>
     </TouchableHighlight>
    </View>
  )
}

const styles=StyleSheet.create({
main:{
    flex:1
},
button:{
    backgroundColor:"teal",
    color:"white",
    textAlign:"center",
    fontSize:15,
    padding:10,
    margin:10,
    borderRadius:10,
    shadowColor:"red",
    elevation:5,
    shadowOpacity:0.5
},
success:{
  backgroundColor:"green"
},
primary:{
  backgroundColor:"blue"
},
warning:{
  backgroundColor:"gold"
},
error:{
  backgroundColor:"red"
}
})

export default StylesInButtonLessons