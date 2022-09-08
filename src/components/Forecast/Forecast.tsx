import React, {ReactElement} from "react"

import {ImageBackground, StyleSheet, View} from "react-native"

import {useGetForecastQuery} from "../../api/weatherApi"
import {useAppSelector} from "../../hooks/useAppSelector"
import {MyAppText} from "../common/MyAppText"

import {ForecastFiveDay} from "./ForecastFiveDay/ForecastFiveDay"

export const Forecast = (): ReactElement => {
    console.log("Forecast")

    const search = useAppSelector(state => state.weatherReducer.search)

    // const {data: forecast2} = useQuery("forecast2")
    //
    // console.log(forecast2)

    const {data: forecast} = useGetForecastQuery(search)
    const list = forecast?.list

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/img/night.png")} // eslint-disable-line global-require
                resizeMode="cover"
                style={styles.imageBackground}
            >
                <MyAppText style={styles.city}>{forecast?.city.name}</MyAppText>
                {list && <ForecastFiveDay list={list} />}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    city: {
        fontSize: 26,
    },
    imageBackground: {
        height: "100%",
    },
})
