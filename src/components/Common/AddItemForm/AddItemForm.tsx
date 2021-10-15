import React from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";

export const AddItemForm: React.FC = props => {
    return (
        <View style={styles.itemForm}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                />
                <Button title="Add"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemForm: {
        width: "100%",
        paddingHorizontal: 10,
        //backgroundColor: "#a585c7"
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        //backgroundColor: "#5e99bf"
    },
    input: {
        width: "80%",
        paddingHorizontal: 10,
        backgroundColor: "#fff"
    }
})