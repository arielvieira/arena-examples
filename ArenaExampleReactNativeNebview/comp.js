import React from 'react'
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default () => {
  return (
    <View style={styles.widget}>
      <WebView
        source={{ uri: 'http://localhost:3000/embed/chat/asgard/im63?token=NDA2YjI0NjQtZTY0ZC00ZGY0LThmNzAtZmJjNTkzNzMzNGJi' }}
        style={{ marginTop: 20, maxHeight: 400 }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  widget: {
    height: '100%',
    width: '100%'
  },
});
