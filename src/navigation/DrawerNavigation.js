import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import AppliNavigation from './AppliNavigation'
import content from './content'
import DrawerContent from './DrawerContent'
import { primaryColor, secondaryColor } from '../data/Colors'


const Drawer=createDrawerNavigator()

export class DrawerNavigation extends Component {
    render() {
        return(
            <Drawer.Navigator initialRouteName="app" drawerStyle={styles.drawer}
                edgeWidth={100}
                drawerContent={props=><DrawerContent {...props} />}
            >
                <Drawer.Screen name="app" component={AppliNavigation} />
                {/* <Drawer.Screen name="settings" component={()=><Text>Hello word</Text>} /> */}
            </Drawer.Navigator>
        )
    }
}

export default DrawerNavigation

const styles=StyleSheet.create({
    tabBar: {
        backgroundColor: primaryColor,
        borderTopWidth: 0.5,
        borderRadius: 10,
    },
    drawer: {
    }
})