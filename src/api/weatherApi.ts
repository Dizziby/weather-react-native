import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {GetDataResponseType} from "./api";


export const rtkApi = createApi({
    reducerPath: "rtkApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.openweathermap.org/data/2.5/"}),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<GetDataResponseType, { city: string }>({
            query: (name) => `pokemon/${name}`,
        }),
    }),
})