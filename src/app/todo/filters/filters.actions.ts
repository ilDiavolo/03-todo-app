import { Action } from '@ngrx/store'


export type filtrosValidos = 'all' | 'completed' | 'active'

export const SET_FILTRO = '[FILTRO] Set Filtro'


export class SetFiltroAction implements Action{
    readonly type = SET_FILTRO
    constructor(public filtro: filtrosValidos){}
}

export type Acciones = SetFiltroAction