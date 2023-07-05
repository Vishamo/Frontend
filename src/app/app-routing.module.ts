import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { LoginComponent } from './login/login.component';
import { FindrecordComponent } from './findrecord/findrecord.component';



const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'create/:id',component:CreateComponent},
  {path:'read',component:ReadComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:"full"},
  {path:'findrecord',component:FindrecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
