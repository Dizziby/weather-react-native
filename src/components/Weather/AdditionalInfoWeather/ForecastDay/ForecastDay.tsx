import React, {ReactElement} from "react";

import {Image, ScrollView, StyleSheet, View} from "react-native";

import {ForecastListType} from "../../../../api/weatherApi";
import {Colors} from "../../../../enum/Colors";
import {kelvinToCelsius} from "../../../../utils/kelvinToCelsius";
import {MyAppText} from "../../../common/MyAppText";

export const ForecastDay = ({list}: ForecastDayPropsType): ReactElement => (
        <View>
            <ScrollView style={styles.forecastWeather} horizontal>
                {list.filter((el, index) => index < 8)
                    .map((el) => <View key={el.dt}
                                 style={[styles.forecastWeatherBlock, el.dt_txt.slice(11, 16) === "00:00" ? {
                                     borderLeftWidth: 1,
                                     borderColor: Colors.White
                                 } : null]}>

                        <MyAppText
                            style={styles.forecastHours}>{el.dt_txt.slice(11, 16)}</MyAppText>
                        <Image
                            style={{width: 40, height: 40}}
                            source={{
                                uri: `https://openweathermap.org/img/w/${el.weather[0].icon}.png`,
                            }}/>
                        <MyAppText
                            style={styles.forecastTemp}>{kelvinToCelsius(el.main.temp)}°</MyAppText>

                    </View>)}
            </ScrollView>
        </View>
    )

const styles = StyleSheet.create({
    forecastWeather: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderColor: Colors.White,
        color: Colors.White,
        paddingVertical: 10,
    },
    forecastWeatherBlock: {
        paddingHorizontal: 20,
        alignItems: "center",
    },
    forecastHours: {
        fontSize: 26,
        paddingVertical: 10,
    },
    forecastTemp: {
        fontSize: 26,
        paddingVertical: 10,
    },
})

type ForecastDayPropsType = {
    list: ForecastListType[]
}