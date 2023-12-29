import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

type AppProps={
    title:string;
}

const ButtonComponent = ({title}:AppProps) => {
    const [data,setData]=useState(0)
    const fruits=(name:string)=>{
        console.warn("billu", " " , name)
    }
  return (
    <View>
    <Button title='on Press' color={"teal"} onPress={()=>fruits("mango")}/>
    <Button color={"blue"} title={title} onPress={()=>setData(data+1)}/>
    <Text style={{fontSize:30}}>{data}</Text>
    </View>
  )
}

export default ButtonComponent