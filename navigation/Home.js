import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button, ImageBackground, FlatList, Dimensions } from "react-native";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-community/async-storage"
import { weatherDeclaration } from "./config";

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    state = {
        done : false
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
        this.props.fetchDataFromApi("https://api.darksky.net/forecast/0c4cf63b2c3e3a393860cc1e195d76b3/39.925533,32.866287?exclude=hourly,daily,minutely")
    }

    componentWillUnmount = () => {
        this.storeData()
    }

    renderItem = ({item}) => (
        <View style={styles.todoContainer}>
            <View style={{...styles.textContainer}}>
                <Text 
                    style={{
                        ...styles.textStyle, 
                        textDecorationLine : item.done == true ? "line-through" : "none",
                        textDecorationColor : "black",
                        textDecorationStyle : "double"}}>
                            {item.content}
                </Text>
            </View>
            <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => {
                    this.props.deleteTodo(item.id.toString())
            }}>
                <Icon name="trash-2" size={21} color="darkred"/>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => {
                    this.props.done(item.id)
            }}>
                <Icon name="check-square" size={21} color="green"/>
            </TouchableOpacity>
        </View>
    )
    
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground 
                    source={{uri : "https://i.imgur.com/YzayrtY.jpg"}}
                    style={styles.image}> 
                    <View style={styles.cityContainer}>
                        <Text style={styles.cityText}>Ankara</Text>
                    </View>
                    <View style={styles.BottomSideContainer}>
                        <View>
                            <Text style={styles.temperature}>{Math.floor((this.props.weatherData?.currently?.apparentTemperature - 32) * 0.55) || "17"}<Text style={{fontSize : 55}} >&#176;</Text></Text>
                        </View>
                        <View>
                            <Text style={styles.summary}>{weatherDeclaration[this.props.weatherData?.currently?.icon] || "Parçalı Bulutlu"}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.listContainer}>
                    {
                        (this.props.todos.length === 0) ?
                        (<View style={styles.emptyList}>
                            <Icon name="list" size={Dimensions.get("window").height / 5.7} color="gray"/>
                            <Text style={{...styles.emptyText, letterSpacing : 1}}>Bugün için bir planınız yok mu ?</Text>
                            <Text style={{...styles.emptyText, fontSize : 12, marginTop : 4}}>Ekleye tıklayın ve oluşturmaya başlayın</Text>
                        </View>) : 
                        (<FlatList
                                data={this.props.todos}
                                renderItem={this.renderItem}
                                keyExtractor={(item) => item.id.toString()}/>)
                    }
                    
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
        height : Dimensions.get("window").height / 9,
        borderWidth : 1.3,
        borderColor : "gray",
        borderRadius : 5,
        marginVertical : 1,
        marginHorizontal : 5,
        padding : 3,
        flexDirection : "row",
        justifyContent : "space-between",
        backgroundColor : "white"
    },
    image: {
      flex: 4,
      flexDirection : "column",
      resizeMode: "cover",
      justifyContent: "center",
    },
    deleteButton : {
        width : Dimensions.get("window").width / 7,
        justifyContent : "center",
        alignItems : "center",
        padding : 1,
        flex : 1
    },
    buttonContainer : {
        flex : 1,
        backgroundColor : "#87b0af"
    },
    BottomSideContainer : {
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center"
    },
    cityContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    cityText : {
        fontSize : 40,
        color : "white",
        letterSpacing : 1,
        fontWeight : "bold"
    },
    temperature : {
        fontSize : 35,
        color : "white",
        letterSpacing : 1,
        fontWeight : "bold",
        marginRight : 17
    },
    summary : {
        fontSize : 23,
        color : "white"
    },
    textContainer : {
        justifyContent : "center",
        overflow : "hidden",
        flex : 5
    },
    textStyle : {
        fontSize : 17
    },
    emptyList : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    emptyText : {
        color : "gray",
        fontSize : 19,
    }
})