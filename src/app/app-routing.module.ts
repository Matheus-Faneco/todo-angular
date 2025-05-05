import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskEditComponent} from './components/task-edit/task-edit.component';
import {HomeComponent} from './components/home/home.component';
import {TaskFormComponent} from './components/task-form/task-form.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'adicionar-tarefa', component: TaskFormComponent},
  {path: 'editar-tarefa/:id', component: TaskEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
