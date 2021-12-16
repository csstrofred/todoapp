import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//components
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoInputAddComponent } from './components/todo-input-add/todo-input-add.component';
import { TodoListItemsComponent } from './components/todo-list-items/todo-list-items.component';

//Pages
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent,
    TodoInputAddComponent,
    TodoListItemsComponent,
    HomeComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class HomeModule {}
