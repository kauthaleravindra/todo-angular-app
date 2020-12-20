import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor(public router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }
  taskForm = new FormGroup({
    name : new FormControl(''),
    description: new FormControl(''),
    status: new FormControl('')
  });
  onSubmit() {
    const {name, description, status} = this.taskForm.value
    const requestBody = {
      name, description, status
    }
    // use post call to the node application for loggin in 
    this.http.post('https://afternoon-basin-70093.herokuapp.com/api/task',requestBody).subscribe((data:any)=>{
      if(data){
        this.router.navigate(['/todolist']);
      }
    })
  }

}
