import React from "react";
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity } from "react-native";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Feather";

class Todo extends React.Component {
    state = {
        todoContent : ""
    }

    static get options() {
        return {
            topBar : {
                visible : false
            }
        }
    }
    onChangeText = (text) => {
        this.setState({todoContent : text})
    } 
    
    render() {
        return(
            <View style = {styles.container}>
                <View style={{flex : 1, justifyContent : "center", alignItems : "center"}}>
                    <Icon name="list" size={Dimensions.get("window").height / 5.7} color="gray"/>
                </View>
                <View style={{flex : 2}}>
                    <TextInput
                        editable={true}
                        maxLength={50}
                        multiline
                        numberOfLines={2}
                        onChangeText={text => this.onChangeText(text)}
                        style={styles.input}
                        placeholder="Bir şeyler yazın..."
                        placeholderTextColor="#cccccc"
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={async () => {
                                let max = 0
                                this.props.todos.map(item => {
                                    if(item.id > max) {
                                        max = item.id
                                    }
                                });
                                let formatTodo = {
                                    content : this.state.todoContent,
                                    id : max + 1,
                                    done : false
                                }
                                await this.props.addTodo(formatTodo)
                                Navigation.pop(this.props.componentId)
                            }}
                            style={styles.button}    
                        >
                            <Text style={styles.buttonText}>Oluştur</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#e3dddc",
        justifyContent : "center",
        paddingHorizontal : 15
    },
    buttonContainer : {
        padding : 7,
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center"
    },
    input : {
        backgroundColor : "#edeef0",
        borderWidth : 0.5,
        borderColor : "gray",
        fontSize : 17
    },
    button : {
        backgroundColor : "#355dbd",
        width : Dimensions.get("window").width / 5,
        height : 33,
        justifyContent : "center",
        alignItems : "center",
        padding : 7,
        borderRadius : 3
    },
    buttonText : {
        fontSize : 16,
        fontWeight : "bold",
        color : "white"
    }
})

export default Todo;
