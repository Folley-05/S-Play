import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export class AppItem extends Component {
    render() {
        const app=this.props.data
        return (
            <TouchableOpacity style={styles.appItem} onPress={()=>this.props.touch(app.id)} >
                <Image style={styles.image}
                    source={require('../ressources/appicon1.jpg')}
                />
                <Text>{app["application_name"]}</Text>
                <Text>Height (mo)</Text>
            </TouchableOpacity >
        )
    }
}

export default AppItem

const styles=StyleSheet.create({
    appItem: {
        marginLeft: 15,
        width: 100,
        height: 150,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
})
