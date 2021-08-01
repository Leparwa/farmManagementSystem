import { Component, OnInit } from '@angular/core';
import { IFarmSoldAnimal } from '../../../../sharedResources/models/farmModels.model';
import { sellFarmAnimalForm } from '../../../../sharedResources/Forms/sellAnimalForm.data';
import { ManageAnimalsService } from '../../services/manage-animals.service';

@Component({
  selector: 'app-sold-animals',
  templateUrl: './sold-animals.component.html',
  styleUrls: ['./sold-animals.component.scss']
})
export class SoldAnimalsComponent implements OnInit {
  sellFarmAnimalForm:{}[]=[]
  soldFarmAnimals:IFarmSoldAnimal[]=[]
  constructor(
    private manageAnimalsService:ManageAnimalsService
  ) { }

  ngOnInit(): void {
    this.createTable()
    this.getSoldAnimals()
  }
  createTable(){
    let fields =sellFarmAnimalForm.fields;
    fields.forEach((field)=>{
      field.fieldGroup.forEach((fieldGroup)=>{
        let oneField= {...field, ...fieldGroup}
        // new collectMilkFormModel(oneField.key, oneField.templateOptions.type)
        this.sellFarmAnimalForm.push(oneField)
      })
    })
  }
  getSoldAnimals(){
    this.manageAnimalsService.getSoldAnimals().subscribe((res)=>{
      this.soldFarmAnimals=res
    })
  }
}
