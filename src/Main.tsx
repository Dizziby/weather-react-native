import React, {ReactElement} from "react"

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import {StyleSheet, View} from "react-native"

import {Forecast} from "./components/Forecast/Forecast"
import {Weather} from "./components/Weather/Weather"
import {RootStackParamList} from "./types/types"

const Tab = createMaterialTopTabNavigator<RootStackParamList>()

export const Main = (): ReactElement => (
        <View style={styles.container}>
            <Tab.Navigator>
                <Tab.Screen
                    name="Weather"
                    component={Weather}
                    options={{title: "Today"}}
                />
                <Tab.Screen
                    name="Forecast"
                    component={Forecast}
                    options={{title: "5 days"}}
                />
            </Tab.Navigator>
        </View>
    )

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
