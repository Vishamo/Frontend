import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  constructor (private service:ApiserviceService,private routes:Router){}
  readData:any;
  ngOnInit():void {
    this.getalldata();
  }

  sucessmsg:any;
  recordcount=0;

  deleteID(id:any)
  {
    this.service.deleteData(id).subscribe((res)=>{
      console.log(res,"deleteres==>");
      this.sucessmsg="Data Deleted Successfully!";
      this.getalldata();
    })
  }

getalldata()
{
  this.service.getAllData().subscribe((res)=>{
    console.log(res,"res==>");
    this.readData=res.data;
    this.recordcount=this.readData.length
  })
}
goto()
{
  this.routes.navigate(['create'])
}

}
