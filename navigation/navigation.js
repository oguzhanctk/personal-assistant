import { Navigation } from "react-native-navigation";

Navigation.setDefaultOptions({
    navigationBar : {
        backgroundColor : "#aaa"
    },
    bottomTabs : {
        titleDisplayMode : "alwaysShow",
        elevation : 40
    },
    
        
})

export const goHome = () => {
    Navigation.setRoot({
        root : {
            stack : {
                id : "App",
                children : [
                    {
                        component : {
                            name : "Home",
                            
                        }
                    }
                ],
                options : {
                    topBar : {
                        title : {
                            alignment : "center"
                        }
                    }
                }
                // options : {
                //     topBar : {
                //         rightButtons : [
                //             {
                //                 id : "sideMenu",
                //                 icon : require("./assets/sideMenu.png"),
                //                 color : "gray",
                //             },
                //         ],
                //     }
                // }
            }
        }
    })
}

export const bottomTabsLayout = () => {
    Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [{
              stack: {
                children: [{
                  component: {
                    name: 'Home'
                  }
                }],
                options: {
                  bottomTab: {
                    text: 'Home',
                    selectedTextColor : "black",
                    icon : require("./assets/signin.png"),
                    testID: 'FIRST_TAB_BAR_BUTTON'
                  }
                }
              }
            },
            {
              component: {
                name: 'Today',
                options: {
                  bottomTab: {
                    text: 'Today',
                    selectedTextColor : "black",
                    icon : require("./assets/signup.png"),
                    testID: 'SECOND_TAB_BAR_BUTTON'
                  }
                }
              }
            }]
          }
        }
      });
}

export const goTosideMenuLayout = () => {
    Navigation.setRoot ({
        root : {
            sideMenu : {
                left : {
                    component : {
                        name : "Todo",
                    },
                },
                center : {
                    stack : {
                        children : [
                            {
                                component : {
                                    name : "Home",
                                    passProps : {
                                        alertText : "this is props for a home component"
                                    },
                                }
                            }
                        ],
                        options : {
                            topBar : {
                                leftButtons : [
                                    {
                                        id : "leftSide",
                                        icon : require("./assets/sideMenu.png"),
                                        color : "black",
                                    }
                                ],
                            },
                        }
                    }
                    
                    
                },
                options : {
                    sideMenu : {
                        left : {
                            width : 200,
                        }
                    },
                }
            }
        }
    })
}

export const overlayTest = () => {
    Navigation.showOverlay({
        component : {
            name : "Test",
            options : {
                overlay : {
                    interceptTouchOutside : true
                }
            }
        }
    });
}