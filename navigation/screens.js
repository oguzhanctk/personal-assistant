import { Navigation } from "react-native-navigation";
import HomeActions from "../actions/HomeActions";
import Initializing from "./Initializing";
import TodoActions from "../actions/TodoActions";
import TodayActions from "../actions/TodayActions";
import Counter from "./Counter";
import NewsDetail from "./NewsDetail";
import { Provider } from "react-redux";
import store from "../reducers/index";

export const registerScreens = () => {
    Navigation.registerComponentWithRedux("Home", () => HomeActions, Provider, store);
    Navigation.registerComponent("Initializing", () => Initializing);
    Navigation.registerComponent("SideMenuTest", () => SideMenuTest);
    Navigation.registerComponent("NewsDetail", () => NewsDetail);
    Navigation.registerComponent("Counter", () => Counter);
    Navigation.registerComponentWithRedux("Todo", () => TodoActions, Provider, store);
    Navigation.registerComponentWithRedux("Today", () => TodayActions, Provider, store);

}