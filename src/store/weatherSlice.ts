import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const initialState: InitialStateType = {
    search: "Vitebsk",
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
    },
})

export const {setSearch} = weatherSlice.actions

export default weatherSlice.reducer

type InitialStateType = {
    search: string
}
