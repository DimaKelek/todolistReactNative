import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const initialState = {
    todolists: [
        {id: "1", title: "What to learn?"},
        {id: "2", title: "What to buy?"}
    ] as TodolistType[],
    selectedTodoID: ""
}

export const todolistsSlice = createSlice({
    name: "Todolists",
    initialState: initialState,
    reducers: {
        selectTodo(state, action: PayloadAction<string>) {
            state.selectedTodoID = action.payload
        },
        addTodo(state, action: PayloadAction<string>) {
            const newTodo: TodolistType = {id: uuid.v1().toString(), title: action.payload}
            state.todolists.push(newTodo)
        },
        removeTodo(state, action: PayloadAction<string>) {
            const index = state.todolists.findIndex(t => t.id === action.payload)
            state.todolists.splice(index, 1)
        },
    }
})

export const {selectTodo, removeTodo, addTodo} = todolistsSlice.actions

export type TodolistType = {
    id: string,
    title: string
}