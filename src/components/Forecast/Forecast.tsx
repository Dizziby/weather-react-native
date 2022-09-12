import React, {ReactElement} from "react"

import {ImageBackground, RefreshControl, ScrollView, StyleSheet, View} from "react-native"

import {useGetForecastQuery} from "../../api/weatherApi"
import {imageBackground} from "../../constants/imageBackground"
import {Colors} from "../../enum/Colors"
import {useAppSelector} from "../../hooks/useAppSelector"

import {ForecastItem} from "./ForecastItem/ForecastItem"

const wait = (timeout: number): Promise<any> =>
    // eslint-disable-next-line no-promise-executor-return
    new Promise(resolve => setTimeout(resolve, timeout))

export const Forecast = (): ReactElement => {

    const search = useAppSelector(state => state.weatherReducer.search)

    const {list} = useGetForecastQuery(search, {
        selectFromResult: ({data}) => ({
            list: data?.list,
        }),
    })

    // Refresh
    const [refreshing, setRefreshing] = React.useState(false)
    const delayRefresh = 2000
    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        wait(delayRefresh).then(() => setRefreshing(false))
    }, [])

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            contentContainerStyle={styles.containerScroll}
        >
            <ImageBackground
                source={imageBackground} // eslint-disable-line global-require
                resizeMode="cover"
                style={styles.imageBackground}
            >
                {list && (
                    <View style={styles.container}>
                        {list
                            .filter(el => el.dt_txt.slice(11, 13) === "15")
                            .map(el => (
                                <ForecastItem key={el.dt_txt} item={el} />
                            ))}
                    </View>
                )}
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerScroll: {
        flexGrow: 1,
    },
    imageBackground: {
        height: "100%",
    },
    container: {
        borderBottomWidth: 1,
        borderColor: Colors.White,
    },
})
