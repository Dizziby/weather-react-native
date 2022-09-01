import React, {ReactElement, ReactNode} from "react";
import {StyleSheet, Text} from "react-native";

export const MyAppText = ({children}: MyAppTextPropsType): ReactElement => {
    return (
        <Text style={{color: "#fff"}}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    container: {
        color: "#fff",
        fontFamily: "Montserrat"
    },
})

type MyAppTextPropsType = {
    children: ReactNode
}