import React, {ReactElement} from "react"

import {StyleSheet, View} from "react-native"

import {GetDataResponseType} from "../../../api/weatherApi";
import {Colors} from "../../../enum/Colors"
import {kelvinToCelsius} from "../../../utils/kelvinToCelsius"
import {MyAppText} from "../../common/MyAppText"

export const MainInfoWeather = React.memo(({weather}: MainWeatherInfoPropsType): ReactElement => {
    const city = weather.name
    const temp = kelvinToCelsius(weather.main.temp)
    const {main} = weather.weather[0]

    console.log("MainInfoWeather")

    return (
        <View style={styles.container}>
            <MyAppText style={styles.city}>{city}</MyAppText>
            <MyAppText style={styles.temp}>{temp}°</MyAppText>
            <MyAppText style={styles.main}>{main}</MyAppText>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {},
    city: {
        fontSize: 40,
        textAlign: "center",
        color: Colors.White,
        fontWeight: "300",
    },
    temp: {
        fontSize: 100,
        textAlign: "center",
        color: Colors.White,
        fontWeight: "400",
    },
    main: {
        fontSize: 20,
        textAlign: "center",
    },
})

type MainWeatherInfoPropsType = {
    weather: GetDataResponseType
}
