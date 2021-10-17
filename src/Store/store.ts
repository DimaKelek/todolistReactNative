import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {todolistsSlice} from "./Todolists/todolistReducer";
import {tasksSlice} from "./Tasks/tasksReducer";

const rootReducer = combineReducers({
    tasks: tasksSlice.reducer,
    todolists: todolistsSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type AppStateType = ReturnType<typeof rootReducer>