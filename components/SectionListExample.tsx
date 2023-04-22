import React from 'react'
import { Text, View,SectionList } from 'react-native'


export const users=[
    {id:1,name:"Rohit",data:["first1","first2","first3"]},
    {id:2,name:"sohit",data:["1","2","3"]},
    {id:3,name:"mohit",data:["1","2","3"]},
    {id:4,name:"johit",data:["1","2","3"]},
    {id:5,name:"kohit",data:["1","2","3"]},
    {id:6,name:"zohit",data:["1","2","3"]},
    {id:7,name:"aohit",data:["1","2","3"]},
    {id:9,name:"qohit",data:["1","2","3"]}
  ]

const SectionListExample = () => {
  return (
    // This is used whenever we have a nested list and the key of nesting should be data as of now
        <SectionList
        sections={users}
        renderItem={({item})=><Text style={{fontSize:15}}>{item}</Text>}
        renderSectionHeader={({section:{name}})=>{
          return <Text>{name}</Text>
        }}
        />
   
  )
}

export default SectionListExample