import React, {ReactElement} from "react"

import {StyleSheet, Text, TextProps} from "react-native"

import {Colors} from "../../enum/Colors"

export const MyAppText = ({children, style}: TextProps): ReactElement => (
    <Text style={[styles.container, style]}>{children}</Text>
)

const styles = StyleSheet.create({
    container: {
        color: Colors.White,
    },
})
