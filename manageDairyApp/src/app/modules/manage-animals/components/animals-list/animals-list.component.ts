import { Component, OnInit } from '@angular/core';
import { IFarmAnimal } from '../../../../sharedResources/models/farmModels.model';
import { RegisterNewAnimalForm } from '../../../../sharedResources/Forms/addNewAnimalForm.data';
import { ManageAnimalsService } from '../../services/manage-animals.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {
registerAnimalForm:{}[]=[]
farmAnimals:IFarmAnimal
  constructor(
    private manageAnimalsService:ManageAnimalsService
  ) { }

  ngOnInit(): void {
    this.createTable()
    this.getAnimals()
  }

  createTable(){
    let fields =RegisterNewAnimalForm.fields;
    fields.forEach((field)=>{
      field.fieldGroup.forEach((fieldGroup)=>{
        let oneField= {...field, ...fieldGroup}
        // new collectMilkFormModel(oneField.key, oneField.templateOptions.type)
        this.registerAnimalForm.push(oneField)
      })
    })
  }
  getAnimals(){
    this.manageAnimalsService.getFarmAnimals().subscribe((res)=>{
      this.farmAnimals = res
    })
  }
}
