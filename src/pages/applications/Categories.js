import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export class Categories extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,
            categories: []
        }
    }
    

    componentDidMount() {
        fetch("https://smart-play.herokuapp.com/categories.json", {method: 'GET'})
        .then(response=>response.json()).then(data=>{
            console.log(data)
            this.setState({loading: false, categories: data})
        })
        .catch(err=>console.log("une erreur est survenu : ", err))
    }
    showApp=data=>{
        this.props.navigation.navigate("appCategorie", {categorie: data})
    }

    render() {
        
        return (
                <View style={styles.categories}>
                            <View style={styles.header}>
                                <TouchableOpacity onPress={this.props.navigation.goBack}>
                                    <MaterialIcons name="arrow-back" size={30} />
                                </TouchableOpacity>
                                <Text style={styles.headerText}>Categories</Text>
                            </View>
                    { this.state.loading ? (<View style={styles.activityContainer}><ActivityIndicator size={100} color="red" /></View> ) : (
                            <View style={styles.categoriesList}>
                                <FlatList 
                                    data={this.state.categories}
                                    renderItem={data=><CategorieItem data={data.item} showApp={this.showApp} />}
                                    keyExtractor={(item, i)=>`${Date.now()}+${i}`}
                                />
                            </View>
                        )
                    }
                </View>
        )
    }
}

export default Categories

export class CategorieItem extends Component {
    render() {
        const data=this.props.data
        console.log("la data",data)
        return (
            <TouchableOpacity style={styles.categorieItem} onPress={()=>this.props.showApp(data)}>
                <Text style={styles.categorieText}>{data.name}</Text>
            </TouchableOpacity>
        )
    }
}





const styles=StyleSheet.create({
    categories: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
    },
    headerText: {
        marginLeft: 20,
        fontSize: 30,
        fontWeight: 'bold'
    },
    categoriesList: {
        padding: 10
    },
    categorieItem: {
        marginTop: 25,
        borderBottomWidth: 1
    },
    categorieText: {
        fontSize: 25,
        fontWeight: '500',
    },
    activityContainer :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
