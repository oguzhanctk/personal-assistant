import { Navigation } from "react-native-navigation";
import HomeActions from "../actions/HomeActions";
import Initializing from "./Initializing";
import Todo from "./Todo";
import { Provider } from "react-redux";
import store from "../reducers/index";

export const registerScreens = () => {
    Navigation.registerComponentWithRedux("Home", () => HomeActions, Provider, store);
    Navigation.registerComponent("Initializing", () => Initializing);
    Navigation.registerComponent("SideMenuTest", () => SideMenuTest);
    Navigation.registerComponent("Todo", () => Todo);

}