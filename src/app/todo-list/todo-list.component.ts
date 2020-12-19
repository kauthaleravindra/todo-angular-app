import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(public router:Router, private http:HttpClient) { }
  todoList : any = []
  ngOnInit(): void {
    if(this.todoList.length < 0){
    this.router.navigate(['createTask'])
    }
  this.getTaskList();
  }

  getTaskList = ()=>{
    this.http.get('http://localhost:8080/api/task/todo/list',{}).subscribe((data:any)=>{
      console.log({data})
     this.todoList = data
    })
  }

  task = ()=>{
    this.router.navigate(['createTask'])
  }

trackByName =(index:number, task:any)=>{
  return task.name
} 
}
