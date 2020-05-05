import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Button, ImageBackground } from "react-native";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Feather";

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
                <Text style={{flex : 1}}>dasdasdddsa</Text>
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
        borderWidth:1,
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
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    }
})