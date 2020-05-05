import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-community/async-storage";
import { goHome, bottomTabsLayout, goTosideMenuLayout } from "./navigation";
import { Navigation } from "react-native-navigation";
import SplashScreen from "react-native-splash-screen";

export default class Initializing extends Component {
  
    componentDidMount = async () => {
        bottomTabsLayout()
        SplashScreen.hide();
    }

    render() {
        return(
            <View style = {{flex : 1}}>
                
            </View>
        )
    }
}