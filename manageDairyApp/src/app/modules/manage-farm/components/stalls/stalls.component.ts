import { Component, OnInit } from '@angular/core';
import { IFarmStalls } from '../../../../sharedResources/models/farmModels.model';
import { ManageAnimalsService } from '../../services/manage-animals.service';

@Component({
  selector: 'app-stalls',
  templateUrl: './stalls.component.html',
  styleUrls: ['./stalls.component.scss']
})
export class StallsComponent implements OnInit {
  farmStalls:IFarmStalls[]=[]
  constructor(
    private manageAnimalsService:ManageAnimalsService
  ) { }

  ngOnInit(): void {
    this.getFarmStalls()
  }
  getFarmStalls(){
    this.manageAnimalsService.getFarmStalls().subscribe((res)=>{
      this.farmStalls=res
    })
  }
}
