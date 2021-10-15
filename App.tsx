import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AddItemForm} from "./src/components/Common/AddItemForm/AddItemForm";

export type TaskType = {
    id: string,
    title: string
}

export const App: React.FC = () => {
    const [tasks, setTasks] = useState<TaskType[]>([])

    const taskItems = tasks.map(t => {
        return (
            <View key={t.id} style={styles.task}>
                <Text>{t.title}</Text>
            </View>
        );
    })

    const addTask = (newTask: TaskType) => {
        setTasks([newTask, ...tasks])
    }

    return (
        <View style={styles.appWrapper}>
            <Text style={styles.text}>Hello Kelek</Text>
            <AddItemForm addTask={addTask}/>
            {taskItems}
        </View>
    );
};

const styles = StyleSheet.create({
    appWrapper: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#0c0c0c"
    },
    text: {
        color: "#fff",
        fontSize: 25,
        marginVertical: 20,
        textTransform: "uppercase"
    },
    task: {
        width: "100%",
        height: 50,
        marginHorizontal: 10,
        backgroundColor: "#fff"
    }
})