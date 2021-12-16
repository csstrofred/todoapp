import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add',
  templateUrl: './todo-input-add.component.html',
  styleUrls: ['./todo-input-add.component.css'],
})
export class TodoInputAddComponent implements OnInit {
  @Output() emmitter = new EventEmitter();
  newTask: string = '';

  constructor() {}

  ngOnInit(): void {}

  submitNewTask() {
    this.emmitter.emit(this.newTask);
  }
}
