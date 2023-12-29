import React from 'react'
import { SectionList, Text, View } from 'react-native'

const SectionListFor2dArraysAndMore = () => {

    // for a nested array you have to use data only 

    const users=[
        {id:1,name:'rohit',data:["nextjs","native","reactjs","c++","python","php"]},
        {id:2,name:'prashant',data:["machine learing","java","kotlin","c++"]},
        {id:3,name:'yogesh',data:["html","css","selenium"]},
        {id:4,name:'ankitk',data:["dotnet","laravel","reactjs","c++","python","php"]}
    ]
  return (
    <View>
      <Text>SectionListFor2dArraysAndMore</Text>

      <SectionList
      sections={users}
      renderItem={({item})=><Text style={{fontSize:20,marginLeft:15}}>{item}</Text>}
      renderSectionHeader={({section:{name}}:any)=>{
        return <Text style={{fontSize:30,color:"red"}}>{name}</Text>
      }}
      />
    </View>
   
  )
}

export default SectionListFor2dArraysAndMore