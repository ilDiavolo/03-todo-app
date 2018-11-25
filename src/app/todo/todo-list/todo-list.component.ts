import { AppState } from 'src/app/app.reducers'
import { Todo } from './../models/todo.models'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todos: Todo[]
  filtro: string

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.todos = state.todos
      this.filtro = state.filtro
    })
  }

}