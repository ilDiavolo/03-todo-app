import { Todo } from './../models/todo.models';
import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from './filters.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform( tareas: Todo[], filtro: filtrosValidos ): Todo[] {
    
    switch (filtro) {
      case 'completed':
        return tareas.filter(tarea => tarea.completado)
      
      case 'active':
        return tareas.filter(tarea => !tarea.completado)
    
      default:
        return tareas
    }
  }

}
