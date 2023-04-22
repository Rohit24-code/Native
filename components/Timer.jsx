import React, { useRef, useState } from 'react'
import { Button , Text , View} from 'react-native'

const Timer = () => {
    const [count,setCount]=useState(0)
    const intervalRef = useRef(null)

    const startTimer=()=>{
    intervalRef.current=setInterval(()=>{
     setCount((cou)=>cou+1)
    },1000)
    }

    const stopTimer=()=>{
        clearInterval(intervalRef.current)
    }

    const resetTimer=()=>{
        setCount(0)
        clearInterval(intervalRef.current)
    }
  return (
    <View>
     <Text style={{fontSize:50,color:"black"}}>{count}</Text>
     <Button title='start' onPress={startTimer}/>
     <Button title='stop' onPress={stopTimer}/>
     <Button title='reset' onPress={resetTimer}/>
    </View>
  )
}

export default Timer