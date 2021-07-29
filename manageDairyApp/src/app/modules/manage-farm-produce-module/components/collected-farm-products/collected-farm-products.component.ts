import { Component, OnInit } from '@angular/core';
import { IFarmProduct } from '../../../../sharedResources/models/farmModels.model';
import { collectFarmProductForm } from '../../../../sharedResources/Forms/collectFarmProductForm.data';
import { ManageFarmService } from '../../services/manage-farm.service';

@Component({
  selector: 'app-collected-farm-products',
  templateUrl: './collected-farm-products.component.html',
  styleUrls: ['./collected-farm-products.component.scss']
})
export class CollectedFarmProductsComponent implements OnInit {
  collectProductForm:{}[]=[]
  collectedFarmProducts:IFarmProduct[]=[]
  constructor(
    private manageFarmService:ManageFarmService
  ) { }

  ngOnInit(): void {
   this.createTable()
   this.getFarmProducts()
  }

  createTable(){
    let fields =collectFarmProductForm.fields;
    fields.forEach((field)=>{
      field.fieldGroup.forEach((fieldGroup)=>{
        let oneField= {...field, ...fieldGroup}
        // new collectMilkFormModel(oneField.key, oneField.templateOptions.type)
        this.collectProductForm.push(oneField)
      })
    })
  }
  getFarmProducts(){
    this.manageFarmService.getFarmProduct().subscribe((res)=>{
      this.collectedFarmProducts = res
      console.log(res);

    },
    (err)=>{

    }
    )
  }
}
