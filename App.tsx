import React, {ReactElement} from "react"

import {NavigationContainer} from "@react-navigation/native"
import {StatusBar} from "expo-status-bar"
import {StyleSheet, View} from "react-native"
import {Colors} from "react-native/Libraries/NewAppScreen"
import {Provider} from "react-redux"

import {SvgSun} from "./src/components/svg/Soon"
import {Main} from "./src/Main"
import {store} from "./src/store/store"

const MyTheme = {
    dark: false,
    colors: {
        primary: 'rgb(137,174,224)',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

// eslint-disable-next-line react/function-component-definition
export default function App(): ReactElement {

    return (
        <NavigationContainer theme={MyTheme}>
            <Provider store={store}>
                <View
                    style={styles.container}
                >
                    <Main />
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <StatusBar style="auto" />
                    <SvgSun />
                </View>
            </Provider>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        marginTop: 30,
    },
})
