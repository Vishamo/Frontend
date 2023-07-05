import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/loginservice';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  public status:any='false';
  constructor(private routes:Router,private loginservice:LoginService){}
  ngOnInit(): void {
    this.loginSubscription();
  }
  private loginSubscription()
  {
    this.loginservice.loginSuccess.subscribe(val=>{
    this.status=sessionStorage.getItem('login') ??'false';
    })
    this.status=sessionStorage.getItem('login');
  }

Logout(){
  sessionStorage.clear();
  sessionStorage.setItem('login','false')
  this.status=sessionStorage.getItem('login') ?? 'false';
  this.routes.navigate(['login'])
}
}
