import React from "react";
import {StyleSheet, Text, View} from "react-native";

type HeaderProps = {
    title: string
}

export const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 25,
        marginVertical: 20,
        textTransform: "uppercase"
    }
})