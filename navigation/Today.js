import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Dimensions } from "react-native";
import { categoryDeclaration } from "./config";
import { Navigation } from "react-native-navigation";


class Today extends Component {
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    componentDidMount = () => {
        this.props.getNews("http://newsapi.org/v2/top-headlines?country=tr&apiKey=3c53393af04f4e68bac464a0854dac32")
    }

    renderItem = ({item}) => {
        let imagePath = ""
        if (item.urlToImage == null || item.urlToImage.slice(-1) == "*")
            imagePath = require("../navigation/assets/pika.png")
        else
            imagePath = {uri : item.urlToImage}
        return (
            <TouchableOpacity onPress={() => {
                Navigation.showModal({
                    component : {
                        name : "NewsDetail",
                        passProps : {
                            new : item
                        }
                    }
            })}}>
                <View style={styles.newContainer}>
                    <Image style={styles.image} source={imagePath}/>
                    <View style={styles.newsRightSide}>
                        <Text style={styles.titleText}>{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    categoryRenderItem = ({item}) => (
        <TouchableOpacity 
            style={{flexDirection : "row"}}
            onPress={() => {
                this.props.getNews(`http://newsapi.org/v2/top-headlines?country=tr&category=${item.genre}&apiKey=3c53393af04f4e68bac464a0854dac32`)
        }}>
            <View style={{...styles.categoryContainer, backgroundColor : item.color}}>
                <Text style={styles.categoryText}>{item.type}</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        return (
            <View style={{flex : 1}}>
                <View style={styles.category}>
                    <FlatList
                        data={categoryDeclaration}
                        renderItem={this.categoryRenderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                {
                    (this.props.isFetchingNews) ? 
                        (<View style={styles.indicatorContainer}>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>) :
                        (<View style={{flex : 11, backgroundColor : "#e3dddc"}}>
                            <FlatList
                                data={this.props.news}
                                renderItem={this.renderItem}
                                keyExtractor={item => item.url}
                            />
                        </View>)

                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    newContainer : {
        flexDirection : "row",
        flex : 1,
        margin : 5,
        padding : 7,
        justifyContent : "center",
        alignItems : "center",
        borderWidth : 0.5,
        borderRadius : 3,
        backgroundColor : "#edeef0"

    },
    image : {
        width : 65,
        height : 65,
        resizeMode : "cover",
        borderRadius : 7,
        backgroundColor : "orange",
        borderWidth : 0.7,
        borderColor : "#7a7878"
    },
    newsRightSide : {
        flex : 1,
        padding : 9,
    },
    titleText : {
        fontWeight : "bold",
        fontSize : 14
    },
    indicatorContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    category : {
        flex : 1,
    },
    categoryContainer : {
        width : Dimensions.get("window").width / 3.5,
        justifyContent : "center",
        alignItems : "center"
    },
    categoryText : {
        fontSize : 13,
        fontWeight : "bold",
        letterSpacing : 1
    }
})

export default Today;