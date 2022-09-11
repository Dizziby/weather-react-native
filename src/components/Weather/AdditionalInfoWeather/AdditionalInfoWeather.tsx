import React, {ReactElement} from "react"

import {StyleSheet, View} from "react-native"

import {ForecastListType} from "../../../api/weatherApi"
import {Colors} from "../../../enum/Colors"
import {convertKelvinToCelsius} from "../../../utils/convertKelvinToCelsius"
import {getCurrentTime} from "../../../utils/getCurrentTime"
import {MyAppText} from "../../common/MyAppText"

import {HourlyForecast} from "./HourlyForecast/HourlyForecast"

export const AdditionalInfoWeather = React.memo(
    ({list}: AdditionalInfoWeatherPropsType): ReactElement => {
        const currentTime = getCurrentTime()
        const dayTemp = convertKelvinToCelsius(
            list.filter(el => el.dt_txt.slice(11, 13) === "15")[0].main.temp,
        )
        const nightTemp = convertKelvinToCelsius(
            list.filter(el => el.dt_txt.slice(11, 13) === "03")[0].main.temp,
        )

        console.log("AdditionalInfoWeather")

        return (
            <View>
                <View style={styles.genericInfo}>
                    <View style={styles.dateInfo}>
                        <MyAppText style={styles.currentTime}>{currentTime}</MyAppText>
                        <MyAppText style={styles.day}>Today</MyAppText>
                    </View>
                    <View style={styles.temp}>
                        <MyAppText style={styles.dayTemp}>{dayTemp}°</MyAppText>
                        <MyAppText style={styles.nightTemp}>{nightTemp}°</MyAppText>
                    </View>
                </View>
                <HourlyForecast list={list} />
            </View>
        )
    },
)

const styles = StyleSheet.create({
    genericInfo: {
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottomWidth: 2,
        borderColor: Colors.White,
    },
    dateInfo: {
        paddingBottom: 10,
    },
    currentTime: {
        color: Colors.Grey,
        paddingLeft: 10,
    },
    day: {
        color: Colors.White,
        fontSize: 26,
        paddingHorizontal: 10,
    },
    temp: {
        flexDirection: "row",
        alignItems: "flex-end",
        paddingBottom: 10,
    },
    dayTemp: {
        fontSize: 26,
        paddingHorizontal: 10,
    },
    nightTemp: {
        fontSize: 26,
        color: Colors.Grey,
        paddingHorizontal: 10,
    },
})

type AdditionalInfoWeatherPropsType = {
    list: ForecastListType[]
}
