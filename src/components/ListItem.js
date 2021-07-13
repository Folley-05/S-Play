import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View, FlatList } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import StoreData from '../data/storeData'
import AppItem from './AppItem'
import { primaryColor, secondaryColor } from '../data/Colors'

export class ListItem extends Component {
    render() {
        const {name, apps}=this.props.data
        const navigate=this.props.navigate
        return (
            <ScrollView style={styles.list}>
                <View style={styles.head}>
                    <Text style={styles.textHead}>{name}</Text>
                    <Text style={styles.textHead}> <MaterialIcons name="arrow-forward-ios" size={25} color={secondaryColor} /> </Text>
                </View>
                <FlatList 
                    data={[...apps, ...StoreData]}
                    renderItem={(data)=><AppItem touch={navigate} data={data.item} />}
                    keyExtractor={(item, i)=>`${Date.now()}+${i}`}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        )
    }
}

export default ListItem

const styles=StyleSheet.create({
    list: {
        marginBottom: 30
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        marginLeft: 15,
    },
    textHead: {
        fontSize: 20,
        fontWeight: 'bold',
        color: secondaryColor,
    },
})
