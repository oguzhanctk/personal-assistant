import React from "react";
import { Button, View, StyleSheet, Text, TextInput, Dimensions } from "react-native";
import { Navigation } from "react-native-navigation";

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
                <TextInput
                    editable={true}
                    maxLength={100}
                    multiline
                    numberOfLines={6}
                    onChangeText={text => this.onChangeText(text)}
                    style={{borderWidth : 1}}
                />
                <View style={styles.buttonContainer}>
                    <Button 
                        title="go back"
                        onPress={() => {
                            Navigation.pop(this.props.componentId)
                        }}
                    />
                    <Button 
                        title="add"
                        onPress={() => {
                            let max = 0
                            this.props.todos.map(item => {
                                if(item.id > max) {
                                    max = item.id
                                }
                            });
                            let formatTodo = {
                                "content" : this.state.todoContent,
                                "id" : max + 1
                            }
                            this.props.addTodo(formatTodo)
                        }}
                    />
                </View>
                <Text>{this.state.todoContent}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "lightblue",
        justifyContent : "center",
        paddingHorizontal : 15
    },
    buttonContainer : {
        padding : 7,
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center"
    }
})

export default Todo;
