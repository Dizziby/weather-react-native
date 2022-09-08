import React, {ReactElement} from "react"

import {Image, StyleSheet, View} from "react-native"

import {ForecastListType} from "../../../api/weatherApi"
import {Colors} from "../../../enum/Colors";
import {getWeekDay} from "../../../utils/dayWeek"
import {kelvinToCelsius} from "../../../utils/kelvinToCelsius"
import {MyAppText} from "../../common/MyAppText"

export const ForecastFiveDay = ({list}: ForecastFiveDayPropsType): ReactElement => (
    <View>
        {list
            .filter(el => el.dt_txt.slice(11, 13) === "15")
            .map(el => (
                <View
                    key={el.dt_txt}
                    style={styles.rowForecast}
                >
                    <MyAppText style={styles.weekDay}>
                        {getWeekDay(
                            new Date(
                                // eslint-disable-next-line no-magic-numbers
                                +el.dt_txt.slice(0, 4),
                                // eslint-disable-next-line no-magic-numbers
                                +el.dt_txt.slice(5, 7) - 1,
                                // eslint-disable-next-line no-magic-numbers
                                +el.dt_txt.slice(8, 10),
                            ),
                        )}
                    </MyAppText>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `https://openweathermap.org/img/w/${el.weather[0].icon}.png`,
                        }}
                    />
                    <MyAppText style={styles.temp}>
                        {kelvinToCelsius(el.main.temp)}°
                    </MyAppText>
                </View>
            ))}
    </View>
)

type ForecastFiveDayPropsType = {
    list: ForecastListType[]
}

const styles = StyleSheet.create({
    rowForecast: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderColor: Colors.White,
        padding: 20,
    },
    weekDay: {
        fontSize: 30,
    },
    temp: {
        fontSize: 30,
    },
    image: {
        width: 60,
        height: 60,
    },
})
