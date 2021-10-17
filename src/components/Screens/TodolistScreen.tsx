import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {AddItemForm} from "../Common/AddItemForm/AddItemForm";
import {Todolist} from "../Todolist/Todolist";
import {TodolistType} from "../../../App";

type TodolistScreenProps = {
    todolists: TodolistType[]
    addTodolist: (title: string) => void
    removeTodolist: (title: string) => void
}

export const TodolistScreen: React.FC<TodolistScreenProps> = ({addTodolist, removeTodolist, todolists}) => {
    return (
        <>
            <AddItemForm addItem={addTodolist} placeholder={"Todolist title ..."}/>
            <FlatList
                style={styles.todolists}
                data={todolists}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Todolist todolist={item} removeTodolist={removeTodolist}/>}
            />
        </>
    );
}

const styles = StyleSheet.create({
    todolists: {
        width: "100%",
    }
})