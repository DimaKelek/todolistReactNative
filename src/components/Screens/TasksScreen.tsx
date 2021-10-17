import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {useSelector} from "react-redux";
import {selectTasks} from "../../Store/Tasks/selectors";
import {selectTodoID} from "../../Store/Todolists/selectors";
import {Task} from "../Task/Task";
import {TaskScreenProps} from "../Navigation/Navigation";

export const TasksScreen: React.FC<TaskScreenProps> = () => {
    const tasks = useSelector(selectTasks)
    const selectedTodoID = useSelector(selectTodoID)

    return (
        <View style={styles.taskScreen}>
            <FlatList
                style={styles.tasks}
                data={tasks[selectedTodoID]}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Task task={item} todolistID={selectedTodoID}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    taskScreen: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 25,
        backgroundColor: "#0c0c0c"
    },
    tasks: {
        width: "100%",
    }
})