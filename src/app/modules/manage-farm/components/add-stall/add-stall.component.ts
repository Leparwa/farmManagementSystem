import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFarmAvailableAnimal } from '../../../../sharedResources/models/farmModels.model';
import { ManageAnimalsService } from '../../services/manage-animals.service';

@Component({
  selector: 'app-add-stall',
  templateUrl: './add-stall.component.html',
  styleUrls: ['./add-stall.component.scss']
})

export class AddStallComponent implements OnInit {
  animals: IFarmAvailableAnimal[];

  selectedAnimals: IFarmAvailableAnimal[];
  farmStallForm = new FormGroup({
    stall_number: new FormControl('', Validators.required),
    stall_status: new FormControl('', Validators.required),
    stall_animals: new FormControl(''),

  });
  constructor(
    private manageAnimalsService:ManageAnimalsService
  ) { 
  
  }

  ngOnInit(): void {
    this.getAnimals()
  }
  getAnimals(){
    this.manageAnimalsService.getFarmAnimals().subscribe((res)=>{
      this.animals = res
    })
  }
  addStall(){
    let stall=this.farmStallForm.value
    this.manageAnimalsService.addStall(stall).subscribe((res)=>{
      
    })
  }
}
