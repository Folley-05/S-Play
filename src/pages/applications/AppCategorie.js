import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, FlatList, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import AppItem from '../../components/AppItem'
import StoreData from '../../data/storeData'

export class AppCategorie extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.data=this.props.route.params.categorie
    }
    showDetails=id=>{
        console.log("vous allez etre navigue")
        this.props.navigation.navigate('appDetails', {idApp: id})
    }
    render() {
        console.log(this.data)
        return (
            <View >
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.props.navigation.goBack}>
                        <MaterialIcons name="arrow-back" size={30} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>{this.data.name}</Text>
                </View>
                <View style={styles.list}>
                    <FlatList
                        data={[...this.data.apps, ...StoreData]}
                        renderItem={data=><AppItem data={data.item} touch={this.showDetails} />}
                        keyExtractor={(item, i)=>`${Date.now()}+${i}`}
                        numColumns={3}
                        columnWrapperStyle={styles.listRow}
                        
                    />
                </View>
            </View>
        )
    }
}

export default AppCategorie

const styles=StyleSheet.create({
    appCategorie:  {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
    },
    goBack: {
        margin: 20
    },
    headerText: {
        marginLeft: 20,
        fontSize: 30,
        fontWeight: 'bold'
    },
    list: {
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 15
    },
    listRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
})
