import { Acciones, AGREGAR_TODO, 
        TOGGLE_TODO, EDITAR_TODO, 
        BORRAR_TODO, TOGGLE_ALL_TODO, 
        CLEAR_COMPLETE } from './todo.actions'
import { Todo } from './models/todo.models'


const tarea1 = new Todo('comer')
const tarea2 = new Todo('estudiar')
const tarea3 = new Todo('dormir')

const estadoInicial: Todo[] = [tarea1, tarea2, tarea3] 


export function 
    todoReducer( state = estadoInicial , action: Acciones): 
    Todo[] {

    switch (action.type) {

        case AGREGAR_TODO:
            const todo = new Todo(action.text)
            return [...state, todo]
        
        case TOGGLE_TODO:             
            return state.map( toggleTodo => {
                if (toggleTodo.id === action.id) {                    
                    return {
                        ...toggleTodo,
                        completado: !toggleTodo.completado 
                    }
                } else {
                    return toggleTodo
                }                
            })

        case TOGGLE_ALL_TODO:             
            return state.map( toggleTodo => {
                return {
                    ...toggleTodo,
                    completado: action.completado
                }          
            })

        case EDITAR_TODO:             
            return state.map( editTodo => {
                if (editTodo.id === action.id) {                    
                    return {
                        ...editTodo,
                        text: action.texto 
                    }
                } else {
                    return editTodo
                }                
            })
        
        case BORRAR_TODO:
            return state.filter( tarea => tarea.id !== action.id  )
            
        case CLEAR_COMPLETE:
            return state.filter(tarea => !tarea.completado )
            
        default:
            return state
            
    }
}