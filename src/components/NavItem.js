import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export class NavItem extends Component {
    render() {
        //console.log('les props : ', this.props)
        let name=this.props.label
        return (
            <TouchableOpacity>
                <Text style={styles.label}>{name}</Text>
            </TouchableOpacity>
        )
    }
}

export default NavItem


const styles=StyleSheet.create({
    label: {
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold'
    }
})