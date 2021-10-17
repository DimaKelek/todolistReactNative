import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import {AddItemForm} from "../Common/AddItemForm/AddItemForm";
import {Todolist} from "../Todolist/Todolist";
import {TodolistScreenProps} from "../Navigation/Navigation";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, selectTodo} from "../../Store/Todolists/todolistReducer";
import {selectTodolists} from "../../Store/Todolists/selectors";

export const TodolistScreen: React.FC<TodolistScreenProps> = ({navigation}) => {
    const todolists = useSelector(selectTodolists)
    const dispatch = useDispatch()

    const addTodolist = (title: string) => {
        dispatch(addTodo(title))
    }

    const checkTasks = (id: string, title: string) => {
        navigation.navigate("Tasks", {title})
        dispatch(selectTodo(id))
    }

    return (
        <View style={styles.todolistScreen}>
            <AddItemForm addItem={addTodolist} placeholder={"Todolist title ..."}/>
            <FlatList
                style={styles.todolists}
                data={todolists}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Todolist todolist={item} checkTasks={checkTasks}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    todolistScreen: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 25,
        backgroundColor: "#0c0c0c"
    },
    todolists: {
        width: "100%",
    }
})