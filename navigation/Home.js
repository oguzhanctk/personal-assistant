import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button, ImageBackground, FlatList, Dimensions } from "react-native";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-community/async-storage"


export default class Home extends Component {
    
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    static get options() {
        return {
            topBar : {
                visible : false
            }
        };
    }

    storeData = async () => {
        try {
          await AsyncStorage.setItem('@todos', JSON.stringify(this.props.todos))
        } catch (e) {
          console.log(e)
        }
    }
    
    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@todos')
            if(value !== null) {
                let formatValue = JSON.parse(value)
                this.props.fromLocalToStore(formatValue)
            }
        } catch(e) {
            console.log(e)
        }
    }

    componentDidMount = () => {
        this.getData()
    }

    componentWillUnmount = () => {
        this.storeData()
    }

    renderItem = ({item}) => (
        <View style={styles.todoContainer}>
            <Text>{item.content}</Text>
            <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => {
                    this.props.deleteTodo(item.id.toString())
            }}>
                <Icon name="trash-2" size={21} color="darkred"/>
            </TouchableOpacity>
        </View>
    )
    
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground 
                    source={{uri : "https://i.imgur.com/zHX9M7j.jpg"}}
                    style={styles.image}> 
                    {/* <Button 
                        title="assads"
                        onPress={
                            () => {
                                this.props.fetchDataFromApi("https://api.darksky.net/forecast/55040b055de63740624ea457e8f8e649/37.8267,-122.4233")

                            }
                    }/> */}
                    <Text>{this?.props?.weatherData?.currently?.ozone}</Text>
                </ImageBackground>
                
                <View style={styles.listContainer}>
                    <FlatList
                        data={this.props.todos}
                        renderItem={this.renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <View style={styles.buttonContainer}/>
                <TouchableOpacity 
                        style={styles.fab} 
                        onPress={() => {
                            Navigation.push(this.props.componentId, {
                                component : {
                                    name : "Todo"
                                }
                            });
                        }}>
                        <Icon name="plus" size={20}/>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fab : {
        borderWidth:1.3,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:55,
        height:55,  
        borderRadius:100,
        backgroundColor : "lightblue",
        position : "absolute",
        bottom : 5,
        right : 5
    },
    container: {
      flex: 1,
      flexDirection: "column"
    },
    listContainer : {
        flex : 8,
        backgroundColor : "#e3dddc",
    },
    todoContainer : {
        height : Dimensions.get("window").height / 10,
        borderWidth : 1.3,
        borderColor : "gray",
        borderRadius : 5,
        marginVertical : 1,
        marginHorizontal : 5,
        padding : 7,
        flexDirection : "row",
        justifyContent : "space-between",
        backgroundColor : "white"
    },
    image: {
      flex: 4,
      resizeMode: "cover",
      justifyContent: "center",
    },
    deleteButton : {
        width : Dimensions.get("window").width / 7,
        justifyContent : "center",
        alignItems : "center",
        padding : 3,
    },
    buttonContainer : {
        flex : 1,
        backgroundColor : "#87b0af"
    }
})