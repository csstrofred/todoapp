import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.css'],
})
export class TodoListItemsComponent implements OnInit {
  public taskList: Task[] = [
    { task: 'pegar as crianças na escola', checked: false },
    { task: 'levar o lixo para fora', checked: true },
    { task: 'desenvolver codigo', checked: false },
    { task: 'resolver confiltos', checked: true },
  ];
  constructor() {}

  ngOnInit(): void {}

  public removeItem(index: number) {
    this.taskList.splice(index, 1);
  }

  public removeAll() {
    let confirm = window.confirm('Deseja eliminar todas as tarefas?');

    if (confirm) this.taskList = [];
  }
}
