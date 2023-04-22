import React from 'react';
import { FlatList, Text, View } from 'react-native';

export const users=[
  {id:1,name:"Rohit"},
  {id:2,name:"sohit"},
  {id:3,name:"mohit"},
  {id:4,name:"johit"},
  {id:5,name:"kohit"},
  {id:6,name:"zohit"},
  {id:7,name:"aohit"},
  {id:9,name:"qohit"}
]

const FlatListLearning = () => {
 
  return (
    <View>
        <FlatList
        data={users}
        renderItem={({item})=><Text>{item.name}</Text>}
        keyExtractor={({item}:any)=>item?.id}
        />
      
    </View>
  );
};

export default FlatListLearning;
