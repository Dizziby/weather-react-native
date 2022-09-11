import React, {ReactElement} from "react"

import {StyleSheet, View} from "react-native"

import {WeatherType} from "../../../api/weatherApi"
import {Colors} from "../../../enum/Colors"
import {convertKelvinToCelsius} from "../../../utils/convertKelvinToCelsius"
import {MyAppText} from "../../common/MyAppText"

export const MainInfoWeather = React.memo(
    ({weather: {city, sky, temp}}: MainWeatherInfoPropsType): ReactElement => {
        console.log("MainInfoWeather")

        return (
            <View style={styles.container}>
                <MyAppText style={styles.city}>{city}</MyAppText>
                <MyAppText style={styles.temp}>{convertKelvinToCelsius(temp)}°</MyAppText>
                <MyAppText style={styles.sky}>{sky}</MyAppText>
            </View>
        )
    },
)

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
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
    sky: {
        fontSize: 20,
        textAlign: "center",
    },
})

type MainWeatherInfoPropsType = {
    weather: WeatherType
}
