import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { color } from 'react-native-reanimated'

import Home from '../pages/applications/Home'
import AppDetails from '../pages/applications/AppDetails'
import Download from '../pages/applications/Download'
import Search from '../pages/applications/Search'
import Categories from '../pages/applications/Categories'
import AppCategorie from '../pages/applications/AppCategorie'
import content from './content'
import { primaryColor, secondaryColor } from '../data/Colors'


const Stack=createStackNavigator()
const BottomTab=createMaterialBottomTabNavigator()


const AppNavigation=()=>{

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

class GamesNavigation extends Component {
    render () {
        return (
            <View><Text>Games</Text></View>
        )
    }
}

export class AppliNavigation extends Component {
    render() {
        return (
            <BottomTab.Navigator
                activeColor="#000"
                inactiveColor="#7c7979"
                shifting={true}
                barStyle={styles.tabBar}
                //style={styles.tabBar}
            >
                <BottomTab.Screen 
                    name="apps"
                    component={AppNavigation}
                    options={{
                        tabBarColor: primaryColor,
                        tabBarLabel: 'Apps',
                        tabBarIcon: ()=>(<MaterialIcons name="apps" size={26} />)
                    }}
                />
                <BottomTab.Screen 
                    name="games"
                    component={AppNavigation}
                    options={{
                        tabBarColor: primaryColor,
                        tabBarLabel: 'Games',
                        tabBarIcon: ({color})=>(<MaterialIcons name="games" color={color} size={25} />)
                    }}
                />
            </BottomTab.Navigator>
        )
    }
}

export default AppliNavigation




const styles=StyleSheet.create({
    tabBar: {
        backgroundColor: primaryColor,
        borderTopWidth: 0.5,
        borderRadius: 10,
    },
    drawer: {
    }
})
