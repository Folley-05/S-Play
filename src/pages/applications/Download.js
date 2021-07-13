import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, Animated } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'
import * as Progress from 'react-native-progress';
import {Surface, Shape} from '@react-native-community/art';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import RNBackgroundDownloader from 'react-native-background-downloader'

import { primaryColor, secondaryColor } from '../../data/Colors'

const dir=`${RNBackgroundDownloader.directories.documents}/clavier.apk`
const baseUrl="https://smart-play.herokuapp.com"
const android = RNFetchBlob.android

export class Download extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             progress: 0,
             loading: true,
             width: 170,
             height: 170
        }
        this.idApp=this.props.route.params.idApp
    }
    app=null
    text="progression : " +0+" % "
    textButton="Annuler"
    request=null
    componentDidMount() {
        fetch(`https://smart-play.herokuapp.com/apps/${this.idApp}.json`, {method: "GET"})
        .then(response=>response.json()).then(data=>{
            this.app=data
            this.setState({...this.state, loading: false})
            console.log(data)
        })
        .catch(err=>console.log("une erreur est survenu : ", err))
        this.installApp()
    }
    
    installApp=()=>{
        this.request=RNBackgroundDownloader.download({
            id: 'file123',
            url: 'https://smart-play.herokuapp.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBOQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b34b7d4ba671ef78867f62f722333a9a84c10ef2/LED%20Neon%20Black.apk',
            destination: dir
        }).begin(expect=>{console.log("size ", expect)})
        .progress(percent=>{
            console.log("progression : ", percent)
            this.text="progression : "+percent*100+" % " 
            this.setState({...this.state, progress: percent})})
        .done(()=>{
            console.log("effectue, debut de l,installation")
            setTimeout(()=>android.actionViewIntent(dir, 'application/vnd.android.package-archive'),2000)
            
        })
        .error(err=>{console.log("une erreure est survenue ", err)})
    }
    cancel=()=>{
        this.request.cancel(err=>console.log("arret : ", err))
        this.props.navigation.goBack()
    }


    render() {
        console.log("le loader ",this.request)
        return (
            <>
                <TouchableOpacity style={styles.goBack} onPress={this.props.navigation.goBack}>
                    <MaterialIcons name="arrow-back" size={30} />
                </TouchableOpacity>
            {this.state.loading ? (<View style={styles.activityContainer}><ActivityIndicator size={100} color={primaryColor} /></View> ) :  (
                <View style={styles.downloadView} >
                    <Text style={styles.appName}>{this.app["application_name"]}</Text>
                    <View>
                        <Progress.Circle progress={this.state.progress} size={250} borderWidth={2} showsText={true} color={primaryColor} />
                        <Image style={styles.image} source={{uri: baseUrl+this.app["images_1"]}} />
                    </View>
                    <Text style={styles.progressText} >{this.text}</Text>
                    <TouchableOpacity style={styles.installButton} onPress={this.cancel}>
                        <Text style={styles.installButtonText}>
                            {`${this.textButton}`}
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                )
                }
            </>
        )
    }
}

export default Download

const styles=StyleSheet.create({
    activityContainer :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    goBack: {
        margin: 20
    },
    downloadView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appName: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        color: secondaryColor,
    },
    appContainer: {
        position: 'relative'
    },
    image: {
        position: 'absolute',
        top: 40,
        left: 40,
        width: 170,
        height: 170,
        borderRadius: 15,
    },
    installButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 250,
        margin: 50,
        borderRadius: 10,
        backgroundColor: primaryColor,
        textAlign: 'center',
        padding: 8,
    },
    progressText: {
        fontWeight: 'bold',
    },
    installButtonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff',
    },
})