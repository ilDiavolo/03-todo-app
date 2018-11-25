import { Acciones, SET_FILTRO, filtrosValidos } from './filters.actions';


const estadoInicial: filtrosValidos = 'all'

export function filterReducer( state = estadoInicial , 
                               action: Acciones): filtrosValidos{

    switch (action.type) {
        
        case SET_FILTRO:
            return action.filtro
    
        default:
            return state
    }
}