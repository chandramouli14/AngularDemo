import { Filter } from './../filter';
import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questionsCount:number;
  sortBy:string="alphabetic";
  selectedTag:string;
  sort:Object=Filter
  constructor() { }

  ngOnInit(): void {
  }
  sortOrder(sortBy:string)
  {
    this.sortBy=sortBy;
  }
  count(event:any)
  {
    this.questionsCount=event
  }
  selected(value:string)
  {
     this.selectedTag=value
  }
}
