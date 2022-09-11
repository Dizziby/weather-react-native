import * as React from "react"
import {ReactElement} from "react"

import {
    ActivityIndicator,
    ImageBackground,
    RefreshControl,
    ScrollView,
    StyleSheet,
    View,
} from "react-native"

import {useGetForecastQuery, useGetWeatherQuery} from "../../api/weatherApi"
import {imageBackground} from "../../constants/imageBackground"
import {useAppSelector} from "../../hooks/useAppSelector"

import {AdditionalInfoWeather} from "./AdditionalInfoWeather/AdditionalInfoWeather"
import {MainInfoWeather} from "./MainInfoWeather/MainInfoWeather"
import {Search} from "./Search/Search"

const wait = (timeout: number): Promise<any> =>
    // eslint-disable-next-line no-promise-executor-return
    new Promise(resolve => setTimeout(resolve, timeout))

export const Weather = (): ReactElement => {
    console.log("Weather")

    const search = useAppSelector(state => state.weatherReducer.search)

    const {weather, isLoadingWeather} = useGetWeatherQuery(search, {
        selectFromResult: ({data, isLoading}) => ({
            weather: data,
            isLoadingWeather: isLoading,
        }),
    })
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
                source={imageBackground}
                resizeMode="cover"
                style={styles.imageBackground}
            >
                {isLoadingWeather ? (
                    <ActivityIndicator style={styles.loading} size="large" />
                ) : (
                    <View style={styles.container}>
                        <View>
                            <Search />
                            {weather && <MainInfoWeather weather={weather} />}
                        </View>
                        {list && <AdditionalInfoWeather list={list} />}
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
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    imageBackground: {
        height: "100%",
    },
    loading: {
        flex: 1,
        justifyContent: "center",
    },
})
