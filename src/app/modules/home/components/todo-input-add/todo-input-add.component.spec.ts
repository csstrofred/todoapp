import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAddComponent } from './todo-input-add.component';

describe('TodoInputAddComponent', () => {
  let component: TodoInputAddComponent;
  let fixture: ComponentFixture<TodoInputAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
