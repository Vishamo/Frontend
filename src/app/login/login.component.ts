import { Component, inject } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './loginservice';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:ApiserviceService,private router:Router,private loginService:LoginService){}
  val:any;
  ngOnInit():void{
this.service.getauth().subscribe((res)=>{
  this.val=res.data;
})
  }
  loginform=new FormGroup({
    'email':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required),
    'role':new FormControl('',Validators.required)
  });
loginsuccess=false;
error:any;
role:any='';
  loginsubmit()
  {
    if(this.loginform.valid)
    {
      for(let element of this.val)
      {
        if(element.email===this.loginform.value.email && element.password===this.loginform.value.password && element.role===this.loginform.value.role)
        {
        this.loginsuccess=true;
        this.role=this.loginform.value.role;
        this.loginform.reset();
        sessionStorage.setItem('login',`${this.loginsuccess}`);
        this.loginService.loginSuccess.next(true);
        if(this.role=='Teacher')
        this.router.navigate(['read']);
        if(this.role=='Student')
        this.router.navigate(['findrecord'])

        break;
        }
        else
        this.loginsuccess=false;
        this.error="Invalid Credentials...!"
      } 
     
    }
  }
}
