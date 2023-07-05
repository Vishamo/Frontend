import { Component } from '@angular/core';
import {ApiserviceService} from '../apiservice.service'
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-findrecord',
  templateUrl: './findrecord.component.html',
  styleUrls: ['./findrecord.component.css']
})
export class FindrecordComponent {
  constructor(private service:ApiserviceService){}
findform=new FormGroup({
  'Roll_No':new FormControl('',Validators.required),
  'DOB':new FormControl('',Validators.required)
})
record='';
findsubmit()
{
  if(this.findform.valid)
  {
   
    this.service.getAllData().subscribe((res)=>{
      for(let element of res.data)
      {
      if(element.Roll_No==this.findform.value.Roll_No&&element.DOB==this.findform.value.DOB)
      {
        this.record=element;
        break;
      }
      this.record="Data Not Found!"
    }
  })
  }
}
foundrecord()
{
  return this.record;
}

}
