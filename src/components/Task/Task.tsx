import React, {useRef, useState} from "react";
import {Animated, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {TaskType} from "../../../App";

type TaskProps = {
    task: TaskType,
    removeTask: (id: string) => void
}

export const Task: React.FC<TaskProps> = ({task, removeTask}) => {
    const [mode, setMode] = useState<boolean>(false);
    const anime = useRef(new Animated.Value(-90)).current;

    const longPressTask = () => {
        Animated.timing(anime, {
            toValue: mode ? 0 : -90,
            duration: 500,
            useNativeDriver: true
        }).start();
        setMode(!mode);
    }

    return (
        <Animated.View style={[styles.taskWrapper, {transform: [{translateX: anime}]}]}>
            <View style={styles.icon}>
                <Text style={{color: "#000"}}>⚙</Text>
            </View>
            <TouchableHighlight onPress={() => removeTask(task.id)}>
                <View style={styles.icon}>
                    <Text style={{color: "#000"}}>🗑</Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity activeOpacity={0.5} onLongPress={longPressTask} style={styles.touch}>
                <View style={styles.taskBlock}>
                    <Text style={styles.taskText}>{task.title}</Text>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    taskWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    touch: {
        width: "100%"
    },
    taskBlock: {
        width: "100%",
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 15,
        justifyContent: "center",
        backgroundColor: "#171616",
        borderRadius: 5
    },
    taskText: {
        color: "#fff"
    },
    icon: {
        width: 30,
        height: 30,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginRight: 15
    }
})