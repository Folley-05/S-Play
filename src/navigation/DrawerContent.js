import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { primaryColor, secondaryColor } from '../data/Colors'

export class DrawerContent extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View style={{flex: 1}}>
                <Drawer.Section>
                    <View style={styles.avatar}>
                            <Image source={require('../ressources/round.png')} style={styles.avatarImage} />
                            <Text style={styles.avatarName}>S-Player</Text>
                    </View>
                </Drawer.Section>
                <DrawerContentScrollView {...this.props}>
                    <Drawer.Item
                        label="Settings"
                        icon={()=>(
                            <Icon
                            name='settings'
                            color={secondaryColor}
                            size={20}
                            />
                        )}
                    />
                    <Drawer.Item
                        label="Privacy Policy"
                        icon={()=>(
                            <Icon
                            name='settings'
                            color={secondaryColor}
                            size={20}
                            />
                        )}
                    />
                    <Drawer.Item
                        label="About"
                        icon={()=>(
                            <Icon
                            name='settings'
                            color={secondaryColor}
                            size={20}
                            />
                        )}
                    />
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawer}>
                    <Drawer.Item
                        icon={()=>(
                            <Icon
                            name='exit-to-app'
                            color={secondaryColor}
                            size={20}
                            />
                        )}
                        label="LogOut"
                    />
                </Drawer.Section>
            </View>
        )
    }
}

export default DrawerContent

const styles=StyleSheet.create({
    drawer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomDrawer: {
        backgroundColor: primaryColor,
        marginBottom: 0,
    },
    avatar: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 30,
        backgroundColor: primaryColor
    },
    avatarImage: {
        width: 120,
        height: 120,
        marginBottom: 10,
        marginTop: 15,
    },
    avatarName: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})
