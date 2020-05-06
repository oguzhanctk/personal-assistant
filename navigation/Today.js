import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import axios from "axios";

class Today extends Component {

    componentDidMount = () => {
        this.props.getNews("http://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=3c53393af04f4e68bac464a0854dac32")
    }

    renderItem = ({item}) => {
        
        let imagePath = ""
        if (item.urlToImage == null || item.urlToImage.slice(-1) == "*")
            imagePath = require("../navigation/assets/pika.png")
        else
            imagePath = {uri : item.urlToImage}
        return (
            <TouchableOpacity>
                <View style={styles.newContainer}>
                    <Image style={styles.image} source={imagePath}/>
                    <View style={styles.newsRightSide}>
                        <Text style={styles.titleText}>{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{flex : 1, backgroundColor : "#e3dddc"}}>
                <FlatList
                    data={this.props.news}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.url}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    newContainer : {
        flexDirection : "row",
        flex : 1,
        margin : 3,
        padding : 4,
        justifyContent : "center",
        alignItems : "center",
        borderBottomWidth : 1,

    },
    image : {
        width : 65,
        height : 65,
        resizeMode : "cover",
        borderRadius : 7
    },
    newsRightSide : {
        flex : 1,
        padding : 9,
    },
    titleText : {
        fontWeight : "bold",
        fontSize : 13
    }
})

export default Today;