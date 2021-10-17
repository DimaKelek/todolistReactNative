import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addTodo} from "../Todolists/todolistReducer";

const initialState = {
    tasks: {
        ["1"]: [
            {id: "0q", title: "React", isDone: false},
            {id: "1q", title: "Redux", isDone: false},
            {id: "2q", title: "JS", isDone: false},
            {id: "3q", title: "TS", isDone: false},
            {id: "4q", title: "React Native", isDone: false},
            {id: "5q", title: "React Native", isDone: false},
            {id: "6q", title: "React Native", isDone: false},
            {id: "7q", title: "React Native", isDone: false},
            {id: "8q", title: "React Native", isDone: false},
            {id: "9q", title: "React Native", isDone: false},
            {id: "10q", title: "React Native", isDone: false},
            {id: "11q", title: "React Native", isDone: false},
            {id: "12q", title: "React Native", isDone: false},
        ],
        ["2"]: [
            {id: "0q", title: "Apple", isDone: false},
            {id: "1q", title: "Android", isDone: false},
            {id: "2q", title: "Mac", isDone: false},
            {id: "3q", title: "Cat", isDone: false},
            {id: "4q", title: "Dog", isDone: false},
        ],
    } as TasksStateType
}

export const tasksSlice = createSlice({
    name: "Tasks",
    initialState: initialState,
    reducers: {
        changeTaskStatus(state, action: PayloadAction<{taskID: string, todolistID: string, value: boolean}>) {
            const index = state.tasks[action.payload.todolistID].findIndex(t => t.id === action.payload.taskID)
            state.tasks[action.payload.todolistID][index].isDone = action.payload.value
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addTodo, (state, action) => {
            state.tasks[action.payload] = []
        })
    }
})

export const {changeTaskStatus} = tasksSlice.actions

type TasksStateType = {
    [key: string]: TaskType[]
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}