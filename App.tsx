
import React, { useState } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import Counter from './components/Counter';
import FlatListLearning from './components/FlatListLearning';
import DynamicGrid from './components/DynamicGrid';
import ListWithMap from './components/ListWithMap';
import SectionListExample from './components/SectionListExample';
import ClassExample from './components/ClassExample';
import ShowHide from './components/ShowHide';
import Timer from './components/Timer';
import ResponsiveDesign from './components/ResponsiveDesign';

function App(){
  return (
    <View>

      {/* // button view and state used; */}
     {/* <Counter/> */}

     {/* Flatlist */}
     {/* <FlatListLearning/> */}

     {/* DynamicGrid  */}
     {/* <DynamicGrid/> */}

        {/* list with map  */}
     {/* <ListWithMap/> */}

     {/* SectionList  */}
     {/* <SectionListExample/> */}

     {/* class Example   */}
     {/* <ClassExample/> */}

     {/* show/hide */}
     {/* <ShowHide/> */}


     {/* timer */}
     {/* <Timer/> */}

     {/* Responsive Design  */}
     <ResponsiveDesign/>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems:"center",
    justifyContent:"center",
    border:1,
    borderColor:"red"
  },
  sectionTitle: {
    fontSize: 24,
    color:"black",
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
