import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, View, FlatList, TextComponent, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Rayon } from '../data/storeData'
import NavItem from '../components/NavItem'

export class NavBar extends Component {

    render() {
        console.log(this.props)
        const {search, nav}=this.props
        return (
            <View style={styles.navBar}>
                <View style={styles.search}>
                    <TouchableOpacity ><MaterialIcons name="menu-open" size={30} /></TouchableOpacity>
                    <TouchableOpacity style={styles.searchContainer} onPress={search}>
                        <Text style={styles.input}>chercher une app ou un jeux</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.navContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity><Text style={styles.navItem}>Pour Vous</Text></TouchableOpacity>
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
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        margin: 10,
        padding: 8,
        borderWidth: 0.8,
        borderRadius: 5,
    },
    searchContainer: {
        marginTop: 2,
    },
    input: {
        flex: 1,
        marginLeft: 15,
        fontSize: 18,
    },
    navContainer: {
        padding: 10,
    },
    navItem: {
        marginRight: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
})





/* 
                <FlatList 
                    data={Rayon}
                    renderItem={data=><NavItem label={data.item} />}
                    keyExtractor={item=>item}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
*/