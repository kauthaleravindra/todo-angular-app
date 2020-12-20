import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    email : new FormControl(''),
    password: new FormControl('')
  });
  onSubmit() {
    const requestBody = {
      email:this.profileForm.value.email,
      password:this.profileForm.value.password
    }
    // use post call to the node application for loggin in 
    this.http.post('https://afternoon-basin-70093.herokuapp.com/auth/user/login',requestBody).subscribe((data:any)=>{
      console.log(data)
      if(data.auth){
        console.log('inside')
        localStorage.setItem('token', data.token)
        this.router.navigate(['/todolist']);
      }
    })
    console.warn(this.profileForm.value);
  }
}
