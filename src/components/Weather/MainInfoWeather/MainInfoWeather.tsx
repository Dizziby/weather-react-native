import React, {ReactElement} from "react"

import {StyleSheet, View} from "react-native"

import {useGetWeatherQuery} from "../../../api/weatherApi"
import {Colors} from "../../../enum/Colors"
import {useAppSelector} from "../../../hooks/useAppSelector"
import {convertKelvinToCelsius} from "../../../utils/convertKelvinToCelsius"
import {MyAppText} from "../../common/MyAppText"

export const MainInfoWeather = (): ReactElement => {
    const search = useAppSelector(state => state.weatherReducer.search)

    const {city, sky, temp} = useGetWeatherQuery(search, {
        selectFromResult: ({data}) => ({
            city: data?.city,
            sky: data?.sky,
            temp: data?.temp,
        }),
    })

    return (
        <View style={styles.container}>
            <MyAppText style={styles.city}>{city}</MyAppText>
            <MyAppText style={styles.temp}>{convertKelvinToCelsius(temp)}°</MyAppText>
            <MyAppText style={styles.sky}>{sky}</MyAppText>
        </View>
    )
}

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