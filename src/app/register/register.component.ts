import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    email : new FormControl(''),
    name  : new FormControl(''),
    password: new FormControl('')
    
  });
  onSubmit() {
    // use post call to the node application for loggin in 
    console.warn(this.profileForm.value.email);
    const requestBody = {
      email:this.profileForm.value.email,
      password:this.profileForm.value.password
    }
    if(this.profileForm.value.email)
    this.http.post('http://localhost:8080/api/user/register',requestBody).subscribe(data=>{
      console.log(data)
    })
    this.router.navigate(['/login']);
  }
}
