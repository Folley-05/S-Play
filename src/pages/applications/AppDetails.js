import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View, Button, Image, TouchableOpacity, ActivityIndicator, PermissionsAndroid } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
//import Video from 'react-native-video'

import { primaryColor, secondaryColor } from '../../data/Colors'

const baseUrl="https://smart-play.herokuapp.com"
const fakeUrl="https://smart-play.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBOQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b34b7d4ba671ef78867f62f722333a9a84c10ef2/LED%20Neon%20Black.apk"

const android = RNFetchBlob.android

export class AppDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             app: null,
             loading: true,
             progress: 0
        }
        this.idApp=this.props.route.params.idApp
        /*this.granted=PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.REQUEST_INSTALL_PACKAGES,
            {
                title: "Cool Photo App Camera Permission",
                message:
                  "Cool Photo App needs access to your camera " +
                  "so you can take awesome pictures.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        )*/
    }
    componentDidMount() {
        fetch(`https://smart-play.herokuapp.com/apps/${this.idApp}.json`, {method: 'GET'})
        .then(response=>response.json()).then(res=>{
            console.log(res)
            this.setState({loading: false, app:res})
        })
        console.log(PermissionsAndroid.PERMISSIONS)
    }
    install=()=>{
        console.log("vous allez etre navigue")
        this.props.navigation.navigate('download', {idApp: this.idApp})
    }
    render() {
        console.log(this.idApp)
        return (<>
            <View>
                <TouchableOpacity style={styles.goBack} onPress={this.props.navigation.goBack}>
                    <MaterialIcons name="arrow-back" color={secondaryColor} size={40} />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.appDetail} contentContainerStyle={styles.appContent} showsVerticalScrollIndicator={false}>
                
                { this.state.loading ? (<View style={styles.activityContainer}><ActivityIndicator size={100} color={primaryColor} /></View> ) : 
                    <>
                        <View style={styles.head}>
                            <View style={styles.imageView}>
                                <Image style={styles.image} 
                                    source={require('../../ressources/appicon1.jpg')} />
                            </View>
                            <View style={styles.nameView}>
                                <View>
                                    <Text style={styles.bigText}> {this.state.app["application_name"]} </Text>
                                </View>
                                <View>
                                    <Text style={styles.subText}> jeu de tir gratuit </Text>
                                    <Text style={styles.subText}> souscription </Text>
                                    <Text style={styles.subText}> achat dans l'application </Text>
                                </View>
                            </View>
                        </View>
                        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}  style={styles.stats}>
                            <View style={styles.statsItem}>
                                <Text style={styles.statsText}> Note 4.0 <AntDesign name="staro" size={20} /> </Text>
                                <Text style={styles.statsText}> 100 votes </Text>
                            </View>
                            <View style={styles.statsItem}>
                                <Text style={styles.statsText}><AntDesign name="download" size={22} /></Text>
                                <Text style={styles.statsText}> 10.0 Mo </Text>
                            </View>
                            <View style={styles.statsItem}>
                                <Text style={styles.statsText}> <AntDesign name="eyeo" size={20} /> </Text>
                                <Text style={styles.statsText}> 3 ans et plus </Text>
                            </View>
                            <View style={styles.statsItem}>
                                <Text style={styles.statsText}> plus de 1 </Text>
                                <Text style={styles.statsText}> Telechargements </Text>
                            </View>
                        </ScrollView>
                        <View style={styles.installButtonContainer}>
                            <TouchableOpacity style={styles.installButton} onPress={this.install}>
                                <Text style={styles.installText}>Installer</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal={true} style={styles.pictures}>
                            <TouchableOpacity>
                                <Image style={styles.imagePictures} source={require("../../ressources/screenshot.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.imagePictures} source={require("../../ressources/screenshot.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.imagePictures} source={require("../../ressources/screenshot.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.imagePictures} source={require("../../ressources/screenshot.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                            </TouchableOpacity>
                        </ScrollView>
                        <View style={styles.video}></View>
                        <View style={styles.about}>
                            <Text style={styles.bigText2}> A propos de cette application </Text>
                            <Text style={styles.subText}> {this.state.app["description"]} </Text>
                        </View>
                </>
                }
                </ScrollView>
        </>)
    }
}

export default AppDetails

const styles=StyleSheet.create({
    activityContainer :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
    },
    appDetail:{
        flex: 1,
        marginTop: 15,
        padding: 10,
    },
    appContent: {
        alignItems: 'center'
    },
    goBack: {
        //margin: 10,
        backgroundColor: primaryColor
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 15,
    },
    nameView: {
        marginRight: 10,
    },
    bigText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: secondaryColor
    },
    bigText2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: secondaryColor
    },
    subText: {
        fontSize: 20,
    },
    stats: {
    },
    statsItem: {
        marginRight: 10,
        padding: 5,
        borderRightWidth: 0.5,
    },
    statsText:{
        color: secondaryColor,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    installButtonContainer: {
        flexDirection: 'row'
    },
    installButton: {
        flex: 0.7,
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 30,
        borderRadius: 10,
        backgroundColor: primaryColor,
        textAlign: 'center',
        padding: 10,
    },
    installText: {
        fontSize: 20,
        fontWeight: "bold",
        color: secondaryColor,
    },
    pictures: {
        marginBottom: 20
    },
    imagePictures: {
        width: 150,
        height: 300,
        marginRight: 15,
        borderRadius: 10
    },
    video: {},
    about: {
        marginBottom: 30
    }
})
