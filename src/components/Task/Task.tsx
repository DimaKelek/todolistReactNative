import React from "react";
import {StyleSheet, Text, View} from "react-native";

type TaskProps = {
    title: string
}

export const Task: React.FC<TaskProps> = ({title}) => {
    return (
        <View style={styles.taskBlock}>
            <Text style={styles.taskText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    taskBlock: {
        width: "100%",
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 15,
        justifyContent: "center",
        backgroundColor: "#171616",
        borderRadius: 5,
    },
    taskText: {
        color: "#fff"
    }
})