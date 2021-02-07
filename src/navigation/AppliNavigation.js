import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/applications/Home'
import AppDetails from '../pages/applications/AppDetails'
import Download from '../pages/applications/Download'
import Search from '../pages/applications/Search'
import Categories from '../pages/applications/Categories'
import AppCategorie from '../pages/applications/AppCategorie'

const Stack=createStackNavigator()

export class AppliNavigation extends Component {
    render() {
        return (
            <Stack.Navigator
                screenOptions={{
                headerShown: false
                }}
            >
                <Stack.Screen
                    name="appHome"
                    component={Home}
                />
                <Stack.Screen
                    name="appDetails"
                    component={AppDetails}
                />
                <Stack.Screen
                    name="download"
                    component={Download}
                />
                <Stack.Screen
                    name="search"
                    component={Search}
                />
                <Stack.Screen
                    name="categories"
                    component={Categories}
                />
                <Stack.Screen
                    name="appCategorie"
                    component={AppCategorie}
                />
            </Stack.Navigator>
        )
    }
}

export default AppliNavigation
