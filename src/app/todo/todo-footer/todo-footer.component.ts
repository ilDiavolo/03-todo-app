import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core'
import * as fromfiltrosValidos from './../filters/filters.actions';
import { Todo } from '../models/todo.models';
import { ClearCompleteAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromfiltrosValidos.filtrosValidos[] = 
  ['all', 'completed', 'active']
  filtroActual: fromfiltrosValidos.filtrosValidos
  pendientes: number

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.contarPendientes(state.todos)
      this.filtroActual  = state.filtro
    })
  }

  cambiarFiltro(filtro: fromfiltrosValidos.filtrosValidos){
    const action = new fromfiltrosValidos.SetFiltroAction(filtro)
    this.store.dispatch(action)
  }

  contarPendientes( list: Todo[]){
    this.pendientes = list.filter( tarea => !tarea.completado ).length
  }

  borrarCompletados(){
    const action = new ClearCompleteAction()
    this.store.dispatch(action)
  }

}
