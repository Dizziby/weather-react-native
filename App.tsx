import React, {ReactElement} from "react"

import {NavigationContainer} from "@react-navigation/native"
import {StatusBar} from "expo-status-bar"
import {StyleSheet, View} from "react-native"
import {Colors} from "react-native/Libraries/NewAppScreen"
import {Provider} from "react-redux"

import {navigationTheme} from "./src/constants/imageBackground";
import {Main} from "./src/Main"
import {store} from "./src/store/store"

export default function App(): ReactElement {
    return (
        <NavigationContainer theme={navigationTheme}>
            <Provider store={store}>
                <View style={styles.container}>
                    <Main/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <StatusBar style="auto"/>
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
