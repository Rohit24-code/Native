import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const TextInputLesson = () => {
  const [data,setData]=useState({name:"",email:"",password:""});
  const [showData,setShowData]=useState(false);

  return (
   <View>
    <Text style={{fontSize:30}}>Simple Form in Native</Text>
    {/* <Text style={{fontSize:30}}>Your Name is : {data?.name}</Text> */}
    <TextInput
    style={styles.TextInput}
    placeholder='Enter Your Name'
    value={data?.name}
    onChangeText={(text)=>(setData({...data,name:text}))}
    />


    <TextInput
    style={styles.TextInput}
    placeholder='Enter Your Email'
    value={data?.email}
    onChangeText={(text)=>(setData({...data,email:text}))}
    />

   <TextInput
    style={styles.TextInput}
    placeholder='Enter Your password'
    value={data?.password}
    secureTextEntry={true}
    onChangeText={(text)=>(setData({...data,password:text}))}
    />

    {
      showData ? <Text style={{fontSize:25 }}>
        {data?.name + " " + data?.email+ " " + data?.password}
      </Text> : null
    }

    <View style={{margin:10}}>
    <Button title='clear input value' color={"teal"} onPress={()=>setData({name:"",email:"",password:""})}/>
    </View>
   

    <Button title='Print value' onPress={()=>setShowData(!showData)}/>

    
   </View>
  )
}

const styles=StyleSheet.create({
  TextInput:{fontSize:18,color:"teal",borderWidth:2,borderColor:"teal",margin:10}
})

export default TextInputLesson