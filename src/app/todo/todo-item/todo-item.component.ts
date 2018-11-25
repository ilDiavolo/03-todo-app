import { BorrarTodoAction } from './../todo.actions'
import { AppState } from './../../app.reducers'
import { Store } from '@ngrx/store'
import { FormControl, Validators } from '@angular/forms'
import { Todo } from './../models/todo.models'
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core'
import { ToggleTodoAction, EditarTodoAction } from '../todo.actions'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  chkInput: FormControl
  editInput: FormControl

  editando: boolean
  @ViewChild('textEdit') textEdit: ElementRef

  @Input() todo: Todo

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkInput = new FormControl(this.todo.completado)
    this.editInput = new FormControl(this.todo.text, Validators.required)

    this.chkInput.valueChanges.subscribe(() => {
      const action = new ToggleTodoAction(this.todo.id)
      this.store.dispatch(action)
    })

  }

  editar(){
    this.editando = true
    setTimeout(() => {
      this.textEdit.nativeElement.select()
    }, 1)
  }
  
  terminarEdicion(){
    if (this.editInput.invalid) {
      return
    }
    if (this.editInput.value === this.todo.text) {
      return
    }
    const action = new EditarTodoAction(this.todo.id, this.editInput.value)
    this.store.dispatch(action)
    this.editando = false
  }

  borrarTodo(){
    const action = new BorrarTodoAction(this.todo.id)
    this.store.dispatch(action)
  }

}
