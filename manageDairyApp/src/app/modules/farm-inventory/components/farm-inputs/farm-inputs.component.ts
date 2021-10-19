import { Component, OnInit } from '@angular/core';
import { IFarmTablActions } from '../../../../sharedResources/models/tableActions.model';
import { farmInputsTableActions } from '../../../../sharedResources/Sample Data/farmTableActions.data';
import { farmInputForm } from '../../../../sharedResources/Forms/farmInputsForm/farmInputForm.data';
import { FarmInventoryService } from '../../service/farm-inventory.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farm-inputs',
  templateUrl: './farm-inputs.component.html',
  styleUrls: ['./farm-inputs.component.scss']
})
export class FarmInputsComponent implements OnInit {
farmInputsForm:{}[]=[]
tableActions:IFarmTablActions[]=[]
farmInputs:{}[]=[]
dataId = new Subscription
  constructor(
    private farmInventoryService:FarmInventoryService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createTable()
    this.getFarmInputs()
    this.tableActions = farmInputsTableActions
    
  }
  createTable(){
    let fields =farmInputForm.fields;
    fields.forEach((field)=>{
      field.fieldGroup.forEach((fieldGroup)=>{
        let oneField= {...field, ...fieldGroup}
        // new collectMilkFormModel(oneField.key, oneField.templateOptions.type)
        this.farmInputsForm.push(oneField)
      })
    })
  }

  getFarmInputs(){
    this.farmInventoryService.getFarmInputs().subscribe((res)=>{
      this.farmInputs =res
    })
  }

  getEmittedData(data:any){
    if(data.action==='update'){
      this.updateInput(data.index)
    }
    else if(data.action ==='view'){
      this.viewInput(data.index)
    }
  }
  updateInput(input:any){
    this.router.navigate(['/inventory/add-input'], { queryParams: { id: `${input}` } });
  }
  viewInput(input:any){
    console.log(input)
  }
}
