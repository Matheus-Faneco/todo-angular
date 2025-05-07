import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskEditComponent} from './components/task-edit/task-edit.component';
import {HomeComponent} from './components/home/home.component';
import {TaskFormComponent} from './components/task-form/task-form.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: RegisterComponent},
  {
    path: 'home',
    component: ToolbarComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'adicionar-tarefa', component: TaskFormComponent},
      {path: 'editar-tarefa/:id', component: TaskEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
