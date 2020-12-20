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
    this.getTaskList();
  }

  getTaskList = ()=>{
    this.http.get('https://afternoon-basin-70093.herokuapp.com/api/task/todo/list',{}).subscribe((data:any)=>{
      if(data.length <= 0){
        this.router.navigate(['createTask'])
      }else{
        this.todoList = data
      }
    })
  }
  updateStatus = (event:any, todo:any)=>{
    const permission = window.confirm('are you sure, you want to update the satus?');
    if(permission){
      this.http.put(`https://afternoon-basin-70093.herokuapp.com/api/task/${todo._id}`,{status:event.target.value}).subscribe((data:any)=>{
        if(data){
          this.getTaskList();
        }
      })
    }
  }
  task = ()=>{
    this.router.navigate(['createTask'])
  }

  deleteTask = (task:any)=>{
    const permission = window.confirm('are you sure, you want to delete the task?');
    if(permission){
      this.http.delete(`https://afternoon-basin-70093.herokuapp.com/api/task/${task._id}`).subscribe((data:any)=>{
        if(data){
          this.getTaskList();
        }
      })
    }
  }

trackByName =(index:number, task:any)=>{
  return task.name
} 
}
