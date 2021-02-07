import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import RNBackgroundDownloader from 'react-native-background-downloader'
import RNFetchBlob from 'rn-fetch-blob'

const dir=`${RNBackgroundDownloader.directories.documents}/clavier.apk`
const android = RNFetchBlob.android

export class Search extends Component {
    back=()=>this.props.navigation.navigate("appHome")
    componentDidMount() {
        console.log("cdm")
        console.log(dir)
    }
    
    render() {
        return (
            <View style={styles.search}>
                <View style={styles.searchBlock}>
                    <TouchableOpacity onPress={this.back}><MaterialIcons name="arrow-back" size={30} /></TouchableOpacity>
                    <TextInput style={styles.textInput} placeholder=" rechercher un jeu ou une app " autoFocus={true} />
                    <TouchableOpacity><FontAwesome name="microphone" size={30} /></TouchableOpacity>
                </View>
                <View style={styles.suggests}>
                    <Suggest />
                    <Suggest />
                    <Suggest />
                </View>
            </View>
        )
    }
}

export default Search


export class Suggest extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.suggest}><MaterialIcons name="access-time" size={20} /><Text style={styles.textSuggest}>suggest 1</Text></TouchableOpacity>
        )
    }
}



const styles=StyleSheet.create({
    search: {
        flex: 1,
    },
    searchBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3,
        borderBottomWidth: 1,
    },
    textInput: {
        flex: 1,
        marginLeft: 15,
        fontSize: 18,
    },
    suggests: {
        paddingLeft: 25,
    },
    suggest: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        height: 25
    },
    textSuggest: {
        fontSize: 20,
        marginLeft: 10
    },
})
