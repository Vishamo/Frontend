import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {ApiserviceService} from '../apiservice.service'; 
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  paramId:any;
  constructor(private service:ApiserviceService,private router:ActivatedRoute,private routes:Router){}
  ngOnInit():void{
    this.paramId=this.router.snapshot.paramMap.get('id'),'getid';
    if(this.paramId)
    {
    this.service.getSingleData(this.paramId).subscribe((res)=>{
      console.log(res,"res==>");
      this.userForm.patchValue({
        Roll_No:res.data[0].Roll_No,
        Name:res.data[0].Name,
        DOB:res.data[0].DOB,
        Score:res.data[0].Score
      });
    }); }
  }

  errmsg:any;
  successmsg:any;
  userForm=new FormGroup({
    'Name':new FormControl('',Validators.required),
    'Roll_No':new FormControl('',Validators.required),
    'DOB':new FormControl('',Validators.required),
    'Score':new FormControl('',Validators.required)
  });
  
userSubmit()
{
  if(this.userForm.valid)
  {
    this.service.createData(this.userForm.value).subscribe((res)=>
    {
      console.log(res,"res==>")
      this.userForm.reset();
      this.successmsg="Data has been Added Successfully!";
    });
  } 
  else
  this.errmsg="All Fields are Required!";
}

userUpdate()
{
  console.log(this.userForm.value,"Updated Form")
  if(this.userForm.valid)
  {
    this.service.updateData(this.userForm.value,this.paramId).subscribe((res)=>{
      console.log(res,"resUpdated")
      this.successmsg=res.message;
    })
  }
  else{
    this.errmsg="All field Is Required!";
  }
}

back()
{
  this.routes.navigate(['read']);
}


}
