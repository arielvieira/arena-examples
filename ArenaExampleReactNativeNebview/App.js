import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

import Embed from './comp'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Arena Liveblog Widget Example
          gasgasgasg
        </Text>
        <Text>{instructions}</Text>
        {/* <Embed /> */}
        <View style={styles.widget}>
          <WebView
            source={{ uri: 'https://sandbox.arena.im/embed/chat/asgard/im63?token=NDA2YjI0NjQtZTY0ZC00ZGY0LThmNzAtZmJjNTkzNzMzNGJi' }}
            style={{ marginTop: 20, maxHeight: 400 }}
          />
        </View>
      </View>
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 150,
  },
  widget: {
    height: '100%',
    width: '100%'
  },
});
