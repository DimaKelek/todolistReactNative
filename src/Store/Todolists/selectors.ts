import {AppStateType} from "../store";

export const selectTodoID = (state: AppStateType) => state.todolists.selectedTodoID
export const selectTodolists = (state: AppStateType) => state.todolists.todolists