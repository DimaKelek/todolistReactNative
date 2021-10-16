import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {AddItemForm} from "./src/components/Common/AddItemForm/AddItemForm";
import {Task} from "./src/components/Task/Task";

export type TaskType = {
    id: string,
    title: string
}

export const App: React.FC = () => {
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: "1", title: "React"},
        {id: "2", title: "React Native"},
        {id: "3", title: "Redux"},
        {id: "4", title: "Redux Toolkit"},
        {id: "5", title: "MobX"},
        {id: "6", title: "MobX state tree"},
        {id: "7", title: "Express"},
        {id: "8", title: "NodeJS"},
        {id: "9", title: "Android"},
        {id: "10", title: "iOS"},
        {id: "11", title: "Typescript"},
        {id: "12", title: "Javascript"},
        {id: "13", title: "Axios"},
        {id: "14", title: "Formik"},
        {id: "15", title: "Material UI"},
        {id: "16", title: "WebStorm"},
        {id: "17", title: "Chrome"},
        {id: "18", title: "Rest API"},
        {id: "19", title: "Redux-saga"},
        {id: "20", title: "Redux-thunk"},
    ])

    const addTask = (newTask: TaskType) => {
        setTasks([newTask, ...tasks])
    }

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id))
    }

    return (
        <View style={styles.appWrapper}>
            <Text style={styles.text}>Hello Kelek</Text>
            <AddItemForm addTask={addTask}/>
            <FlatList
                style={styles.tasks}
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Task task={item} removeTask={removeTask}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    appWrapper: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: "#0c0c0c"
    },
    text: {
        color: "#fff",
        fontSize: 25,
        marginVertical: 20,
        textTransform: "uppercase"
    },
    tasks: {
        width: "100%",
    }
})