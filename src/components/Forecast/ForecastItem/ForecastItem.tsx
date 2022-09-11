import React, {ReactElement, useState} from "react"

import {Image, StyleSheet, TouchableOpacity, View} from "react-native"

import {ForecastListType} from "../../../api/weatherApi"
import {Colors} from "../../../enum/Colors"
import {convertKelvinToCelsius} from "../../../utils/convertKelvinToCelsius"
import {getDayWeek} from "../../../utils/getDayWeek"
import {MyAppText} from "../../common/MyAppText"

import {MoreInfoForecastItem} from "./MoreInfoForecastItem/MoreInfoForecastItem"

export const ForecastItem = ({item}: ForecastItemPropsType): ReactElement => {
    const [show, setShow] = useState(false)

    const date = item.dt_txt
    const sky = item.weather[0].main
    const iconURI = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`
    const temp = convertKelvinToCelsius(item.main.temp)

    return (
        <View>
            <TouchableOpacity onPress={() => setShow(!show)}>
                <View style={styles.item}>
                    <View>
                        <MyAppText style={styles.weekDay}>
                            {getDayWeek(
                                new Date(
                                    +date.slice(0, 4),
                                    +date.slice(5, 7) - 1,
                                    +date.slice(8, 10),
                                ),
                            )}
                        </MyAppText>
                        <MyAppText>{sky}</MyAppText>
                    </View>
                    <View style={styles.info}>
                        <Image
                            style={styles.icon}
                            source={{
                                uri: iconURI,
                            }}
                        />
                        <MyAppText style={styles.temp}>{temp}°</MyAppText>
                    </View>
                </View>
            </TouchableOpacity>
            {show && <MoreInfoForecastItem item={item} />}
        </View>
    )
}

type ForecastItemPropsType = {
    item: ForecastListType
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: Colors.White,
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    info: {
        flexDirection: "row",
    },

    weekDay: {
        fontSize: 26,
    },
    temp: {
        fontSize: 26,
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 50,
    },
})
