import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.css'],
})
export class TodoListItemsComponent implements DoCheck {
  public taskList: Task[] = JSON.parse(localStorage.getItem('list') || '[]');
  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }

  public removeItem(index: number) {
    this.taskList.splice(index, 1);
  }

  public removeAll() {
    const confirm = window.confirm('Deseja eliminar todas as tarefas?');
    if (confirm) this.taskList = [];
  }

  public setNewTaskList(newTask: string) {
    this.taskList.push({ task: newTask, checked: false });
  }

  public validateInput(text: string, index: number) {
    if (!text.length) {
      const confirm = window.confirm('A tarefa está vazia, deseja eliminar?');
      if (confirm) this.removeItem(index);
    }
  }
}
