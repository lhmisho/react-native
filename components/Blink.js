import React from 'react'
import {Text, View} from 'react-native'


class Blink extends React.Component{
    
    componentDidMount(){
        setInterval(()=>(
            this.setState(previousState =>(
                {isShowingText: !previousState.isShowingText}
            ))
        ), 1000)
    }
    //state object
    state = { isShowingText: true };
    render(){
        if(!this.state.isShowingText){
            return null
        }
        return(
            <Text>{this.props.text}</Text>
        )
    }
}

export default Blink