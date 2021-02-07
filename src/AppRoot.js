import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

// import Home from './pages/applications/Home'
// import NavBar from './layout/NavBar'
import AppliNavigation from './navigation/AppliNavigation'

export class AppRoot extends Component {
    render() {
        return (
            <View style={styles.appRoot} >
                <NavigationContainer>
                    <AppliNavigation />
                </NavigationContainer>
            </View>
        )
    }
}

export default AppRoot

const styles=StyleSheet.create({
    appRoot: {
        flex: 1,
        borderWidth: 2
    }
})
