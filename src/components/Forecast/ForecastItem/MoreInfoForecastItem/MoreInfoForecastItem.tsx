import React, {ReactElement} from "react"

import {StyleSheet, View} from "react-native"

import {ForecastListType} from "../../../../api/weatherApi"
import {MyAppText} from "../../../common/MyAppText"

export const MoreInfoForecastItem = ({
    item,
}: MoreInfoForecastItemPropsType): ReactElement => (
    <View style={styles.container}>
        <View>
            <MyAppText>Wind: </MyAppText>
            <MyAppText>Humidity: </MyAppText>
            <MyAppText>Change of rain:</MyAppText>
        </View>
        <View style={styles.data}>
            <MyAppText>{item.wind.speed} m/s</MyAppText>
            <MyAppText>{item.main.humidity} %</MyAppText>
            <MyAppText>{item.pop * 100} %</MyAppText>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 40,
        flexDirection: "row",
    },
    data: {
        marginLeft: 100,
    },
})

type MoreInfoForecastItemPropsType = {
    item: ForecastListType
}
