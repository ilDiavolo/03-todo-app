import { Todo } from './todo/models/todo.models'
import { filtrosValidos } from './todo/filters/filters.actions'
import { ActionReducerMap } from '@ngrx/store'
import { todoReducer } from './todo/todo.reducer'
import { filterReducer } from './todo/filters/filters.reducer'


export interface AppState{
    todos: Todo[]
    filtro: filtrosValidos
}


export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filterReducer
}