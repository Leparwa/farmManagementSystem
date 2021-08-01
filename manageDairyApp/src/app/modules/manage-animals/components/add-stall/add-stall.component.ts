import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-stall',
  templateUrl: './add-stall.component.html',
  styleUrls: ['./add-stall.component.scss']
})
export class AddStallComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    
  }

  addStall(stall){
    console.log(stall)
  }
}
