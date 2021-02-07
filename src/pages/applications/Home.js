import React, { Component } from 'react'
import { Platform, StyleSheet, View, FlatList, Image, PermissionsAndroid, ActivityIndicator } from 'react-native'


import NavBar from '../../layout/NavBar'
import ListItem from '../../components/ListItem'

import { Categories } from '../../data/storeData'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            categories: []
        }
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: "this app need that permission",
                message:
                  "Cool Photo App needs access to your camera " +
                  "so you can take awesome pictures.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        )
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                title: "this app need that permission",
                message:
                  "Cool Photo App needs access to your camera " +
                  "so you can take awesome pictures.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        )
    }

    componentDidMount() {
        //console.log("cdm")
        console.log(Platform)
        fetch("https://smart-play.herokuapp.com/categories.json", {method: "GET"})
        .then(response=>response.json()).then(res=>{
            //console.log(res)
            this.setState({loading: false, categories: res})
        })
        .catch(err=>console.log("une erreur est survenue : ", err))
    }
    
    showDetails=id=>{
        console.log("vous allez etre navigue")
        this.props.navigation.navigate('appDetails', {idApp: id})
    }
    search=()=>{
        console.log("vous allez etre naviguez")
        this.props.navigation.navigate("search")
    }
    navigate=desti=>this.props.navigation.navigate(desti)

    render() {
        //console.log(RNFetchBlob)
        return (
            <>
                <View>
                    <NavBar search={this.search} nav={this.navigate} />
                </View>
                <View style={{flex: 1, marginTop: 15}}>
                    { !this.state.loading ?  (
                        <FlatList 
                            data={this.state.categories}
                            renderItem={(data)=><ListItem navigate={this.showDetails} data={data.item} />}
                            keyExtractor={(item, i)=>`${Date.now()}+${i}`}
                        />
                    ) : (<View style={styles.activityContainer}><ActivityIndicator size={100} color="red" /></View> )
                }
                </View>
            </>
        )
    }
}

export default Home


const styles=StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    activityContainer :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

