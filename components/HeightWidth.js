import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

class HeightWidth extends React.Component {
    goBlink = () => {
        Actions.BlinkApp()
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ margin: 20 }} onPress={this.goBlink}>
                    <Text>This is blink app</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: 'green' }} />
                <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
                <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
            </View>
        )
    }
}
export default HeightWidth