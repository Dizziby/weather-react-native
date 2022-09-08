import React, {ReactElement, useState} from "react"

import {StyleSheet, TextInput} from "react-native"

import {Colors} from "../../../enum/Colors"
import {useAppDispatch} from "../../../hooks/useAppDispatch"
import {setSearch} from "../../../store/weatherSlice"

export const Search = (): ReactElement => {
    const dispatch = useAppDispatch()

    const [search, setSearchLocalState] = useState("")

    const handleBlur = (): void => {
        dispatch(setSearch(search))
    }

    return (
        <TextInput
            style={styles.input}
            onChangeText={setSearchLocalState}
            onBlur={handleBlur}
            value={search}
            placeholder="Search in Berlin"
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 0,
        borderRadius: 5,
        backgroundColor: Colors.White,
        marginTop: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
    },
})
