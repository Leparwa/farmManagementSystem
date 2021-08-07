import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { RegisterNewAnimalForm } from '../../../../sharedResources/Forms/addNewAnimalForm.data';
import { ManageAnimalsService } from '../../services/manage-animals.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {
  form = new FormGroup({});
  model:any = {};
  fields: FormlyFieldConfig[] = [];
  // farmProduct:IFarmProduct[] =[]
  constructor(
    private manageFarmAnimalsService:ManageAnimalsService
  ) { }

  ngOnInit(): void {
    this.fields = RegisterNewAnimalForm.fields
  }

  addAnimal(animal){
    console.log(animal)
    let formatData={...animal.animalAcquisitionProcess, ...animal}
    this.manageFarmAnimalsService.postFarmData(formatData).subscribe((res)=>{

    })
  }
}
