import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native'
import BlinkApp from './components/BlinkApp'
import StyleCom from './components/StyleCom'
import TextInANest from './components/TextStyle'
import HeightWidth from './components/HeightWidth'
import Routes from './components/Routes'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    let pic = {
      uri: 'http://www.goodmorningimagesforlover.com/wp-content/uploads/2018/10/cute-panda-pics.jpg'
    }

    return (
      // <View style={styles.container}>
      //   <Image source={pic} style={{ width: 193, height: 110 }} />
      //   <BlinkApp />
      //   <StyleCom />
      //   <TextInANest />
      //   <HeightWidth />
      // </View>
      // <HeightWidth />
      // <View style={styles.container}>
        
      // </View>
      <Routes />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
