import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, FlatList, TextComponent, TouchableOpacity, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Rayon } from '../data/storeData'
import NavItem from '../components/NavItem'
import { primaryColor, secondaryColor } from '../data/Colors'

export class NavBar extends Component {

    render() {
        console.log("les props ",this.props)
        const {search, nav, navigation}=this.props
        return (
            <View style={styles.navBar}>
                <View style={styles.logoContainer}>
                    <Image source={require('../ressources/logorond.png')} style={styles.logo} />
                    <Text style={styles.appName}>Splay</Text>
                </View>
                <View style={styles.search}>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()} ><MaterialIcons name="menu-open" size={40} color="#010101" /></TouchableOpacity> 
                    <TouchableOpacity style={styles.searchContainer} onPress={search}>
                        <Text style={styles.input}>chercher une app ou un jeux</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.navContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity><Text style={styles.navItem, styles.focusItem}>Pour Vous</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.navItem}>Mieux Notes</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>nav("categories")}><Text style={styles.navItem}>Categories</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.navItem}>Premium</Text></TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

export default NavBar


const styles=StyleSheet.create({
    navBar: {
        borderBottomWidth: 2,
        marginBottom: 10,
        borderColor: secondaryColor,
        backgroundColor: primaryColor
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 8
    },
    appName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: secondaryColor,
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        //height: 40,
        //padding: 8,
        //borderWidth: 0.8,
        borderRadius: 5,
    },
    searchContainer: {
        flex: 1,
        height: 40,
        marginRight: 8,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    input: {
        flex: 1,
        marginLeft: 15,
        fontSize: 18,
        textAlignVertical: 'center',
        color: secondaryColor,
    },
    navContainer: {
        padding: 10,
    },
    navItem: {
        marginRight: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: secondaryColor,
    },
    focusItem: {
        marginRight: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: secondaryColor,
    },
})



