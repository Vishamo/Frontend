import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-getrecord',
  templateUrl: './getrecord.component.html',
  styleUrls: ['./getrecord.component.css']
})
export class GetrecordComponent {
@Input()
records:any;
}
