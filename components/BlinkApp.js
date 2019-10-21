import React from 'react'
import Blink from './Blink'
import {View, Text, TouchableOpacity} from 'react-native'
import { Actions } from 'react-native-router-flux'

class BlinkApp extends React.Component{

    goHightWidth = () =>{
        Actions.HeightWidth()
    }
    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.goHightWidth}>
                    <Text>go to height weight</Text>
                </TouchableOpacity>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        )
    }
}
export default BlinkApp