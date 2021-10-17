import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TodolistScreen} from "./src/components/Screens/TodolistScreen";
import uuid from "react-native-uuid";
import {Header} from "./src/components/Common/Header/Header";

export type TodolistType = {
    id: string,
    title: string
}

export const App: React.FC = () => {
    const [todolists, setTodolists] = useState<TodolistType[]>([
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

    const addTodolist = (title: string) => {
        const newTodo: TodolistType = {id: uuid.v1().toString(), title}
        setTodolists([newTodo, ...todolists])
    }

    const removeTodolist = (id: string) => {
        setTodolists(todolists.filter(t => t.id !== id))
    }

    return (
        <View style={styles.appWrapper}>
            <Header title={"Hello kelek"}/>
            <TodolistScreen
                addTodolist={addTodolist}
                removeTodolist={removeTodolist}
                todolists={todolists}
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
    }
})