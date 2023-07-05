import { Injectable, inject } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class LoginService{
public loginSuccess:Subject<Boolean>=new Subject<Boolean>();
constructor(){}

}