import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {TodoListComponent} from './todo-list/todo-list.component'
import { GuardServiceService} from './guard-service.service'
import { CreateTaskComponent } from './create-task/create-task.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'todolist',component:TodoListComponent, canActivate:[GuardServiceService]},
  {path:'createTask',component:CreateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
