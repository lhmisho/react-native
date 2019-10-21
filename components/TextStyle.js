import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font'

export default class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Bird's Nest",
      bodyText: 'This is not really a bird nest.'
    };
  }
  componentDidMount() {
    Font.loadAsync({
      'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf')
    })
  }
  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
        </Text>
        <Text numberOfLines={5}>
          {this.state.bodyText}
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    // fontFamily: 'roboto-bold',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
