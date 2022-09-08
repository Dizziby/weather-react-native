import React, {ReactElement} from "react"

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import {StyleSheet, View} from "react-native"

import {MyAppText} from "./components/common/MyAppText"
import {Forecast} from "./components/Forecast/Forecast"
import {Weather} from "./components/Weather/Weather"
import {RootStackParamList} from "./types/types"

const Tab = createMaterialTopTabNavigator<RootStackParamList>()

export const Main = (): ReactElement => {
    console.log("Main")

    return (
        <View style={styles.container} >
            <Tab.Navigator>
                <Tab.Screen name="Weather" component={Weather}/>
                <Tab.Screen name="Forecast" component={Forecast} />
            </Tab.Navigator>
            <MyAppText>Main</MyAppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
