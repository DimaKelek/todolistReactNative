import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {changeTaskStatus, TaskType} from "../../Store/Tasks/tasksReducer";
import CheckBox from "@react-native-community/checkbox";
import {useDispatch} from "react-redux";

type TaskProps = {
    task: TaskType
    todolistID: string
}

export const Task: React.FC<TaskProps> = ({task, todolistID}) => {
    const dispatch = useDispatch()

    const changeStatus = (value: boolean) => {
        dispatch(changeTaskStatus({taskID: task.id, todolistID, value}))
    }

    return (
        <View style={styles.task}>
            <View style={styles.container}>
                <CheckBox value={task.isDone} onValueChange={changeStatus}/>
                <Text style={styles.taskText}>{task.title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    task: {
        width: "100%",
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 15,
        justifyContent: "center",
        backgroundColor: "#171616",
        borderRadius: 5
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    taskText: {
        color: "#fff"
    },
})