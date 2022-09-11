import React, {ReactElement} from "react"

import {Image, ScrollView, StyleSheet, View} from "react-native"

import {ForecastListType} from "../../../../api/weatherApi"
import {Colors} from "../../../../enum/Colors"
import {convertKelvinToCelsius} from "../../../../utils/convertKelvinToCelsius"
import {MyAppText} from "../../../common/MyAppText"

export const HourlyForecast = ({list}: ForecastDayPropsType): ReactElement => (
    <ScrollView style={styles.container} horizontal>
        {list
            .filter((el, index) => index < 8)
            .map(el => {
                const time = el.dt_txt.slice(11, 16)
                const temp = convertKelvinToCelsius(el.main.temp)
                const iconURI = `https://openweathermap.org/img/w/${el.weather[0].icon}.png`

                return (
                    <View
                        key={el.dt}
                        style={[
                            styles.blockItem,
                            time === "00:00" ? styles.borderLeft : null,
                        ]}
                    >
                        <MyAppText style={styles.time}>{time}</MyAppText>
                        <Image
                            style={styles.icon}
                            source={{
                                uri: iconURI,
                            }}
                        />
                        <MyAppText style={styles.temp}>{temp}°</MyAppText>
                    </View>
                )
            })}
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderColor: Colors.White,
        color: Colors.White,
        paddingVertical: 5,
    },
    blockItem: {
        paddingHorizontal: 15,
        alignItems: "center",
    },
    time: {
        fontSize: 22,
        paddingVertical: 5,
    },
    temp: {
        fontSize: 22,
        paddingVertical: 5,
    },
    borderLeft: {
        borderLeftWidth: 1,
        borderColor: Colors.White,
    },
    icon: {
        width: 40,
        height: 40,
    },
})

type ForecastDayPropsType = {
    list: ForecastListType[]
}
