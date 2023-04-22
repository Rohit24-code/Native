import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native';

class ClassExample extends Component {

    // how to use states and props in class components 
    

    constructor(){
        // all keys inside this object is state

        super();
        // we use super keyward as we need to extend its parents components properties
        this.state={
           name:"Rohit"
        }
    }

    updateName(item:any){
        this.setState({name:item})
    }

    render(): React.ReactNode {
        return (
            // we can use function using this keyword 
            <View>
                <Text>{this.state.name}</Text>
                <TextInput value={this.state.name} placeholder='type' onChange={(item)=>this.updateName(item)}/>
            </View>
            // Inside this everthing will work same as functional 
          )
    }

}

export default ClassExample