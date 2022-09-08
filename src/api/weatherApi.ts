import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.openweathermap.org/data/2.5/"}),
    endpoints: builder => ({
        getWeather: builder.query<GetDataResponseType, string>({
            query: city => `weather?q=${city}&appid=d8b8feb797d8d7246525255551517358`,
        }),
        getForecast: builder.query<GetForecastResponseType, string>({
            query: city => `forecast?q=${city}&appid=d8b8feb797d8d7246525255551517358`,
        }),
    }),
})

export const {useGetWeatherQuery, useGetForecastQuery} = weatherApi

// Types
export type GetDataResponseType = {
    coord: {
        lon: number
        lat: number
    }
    weather: WeatherType[]
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    }
    visibility: number
    wind: {
        speed: number
        deg: number
    }
    clouds: {
        all: number
    }
    dt: number
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
}
export type WeatherType = {
    id: number
    main: string
    description: string
    icon: string
}

export type GetForecastResponseType = {
    cod: string
    message: number
    cnt: number
    list: ForecastListType[]
    city: CityType
}
export type ForecastListType = {
    dt: number
    main: ForecastListMainType
    weather: ForecastListWeatherType[]
    clouds: {
        all: number
    }
    wind: {
        speed: number
        deg: number
        gust: number
    }
    visibility: number
    pop: number
    sys: {
        pod: string
    }
    dt_txt: string
}
export type CityType = {
    id: number
    name: string
    coord: {
        lat: number
        lon: number
    }
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
}
export type ForecastListMainType = {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
}
export type ForecastListWeatherType = {
    id: number
    main: string
    description: string
    icon: string
}
