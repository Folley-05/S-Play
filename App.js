import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppRoot from './src/AppRoot'

export class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <AppRoot />
      </View>
    )
  }
}

export default App

const styles=StyleSheet.create({
  app: {
    flex: 1,
  }
})


