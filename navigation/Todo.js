import React from "react";
import { SafeAreaView, Image, Button, View, StyleSheet} from "react-native";
import { Navigation } from "react-native-navigation";

class Todo extends React.Component {
    static get options() {
        return {
            topBar : {
                visible : false
            }
        }
    }
    
    render() {
        return(
            <SafeAreaView style = {{flex : 1, backgroundColor : "gray"}}>
                <View style={styles.container}>
                    <Button 
                        title="go back"
                        onPress={() => {
                            Navigation.pop(this.props.componentId)
                        }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "lightblue"
    }
})

export default Todo;
