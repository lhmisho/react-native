import React from 'react'
import Blink from './Blink'
import {View, Text} from 'react-native'

class BlinkApp extends React.Component{

    render(){
        return(
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        )
    }
}
export default BlinkApp