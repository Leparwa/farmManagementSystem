import { Component, OnInit } from '@angular/core';
import { IFarmAsset } from '../../../../sharedResources/models/farmAssets.model';
import { farmAssetBasicForm } from '../../../../sharedResources/Forms/farmAssetForms/farmAssetBasicInfoForm.data';
import { FarmInventoryService } from '../../service/farm-inventory.service';
import { IFarmTablActions } from '../../../../sharedResources/models/tableActions.model';
import { farmAssetTableActions } from '../../../../sharedResources/Sample Data/farmTableActions.data';

@Component({
  selector: 'app-farm-assets',
  templateUrl: './farm-assets.component.html',
  styleUrls: ['./farm-assets.component.scss']
})
export class FarmAssetsComponent implements OnInit {
  farmAssetForm:{}[]=[]
  farmAssets:IFarmAsset[]=[]
  assetsTableActions:IFarmTablActions[]=[]
  constructor(
    private farmAssetsService:FarmInventoryService
  ) { }

  ngOnInit(): void {
    this.createTable()
    this.getFarmAssets()
    this.createTableActions()
  }
  createTable(){
    let fields =farmAssetBasicForm.fields;
    fields.forEach((field)=>{
      field.fieldGroup.forEach((fieldGroup)=>{
        let oneField= {...field, ...fieldGroup}
        // new collectMilkFormModel(oneField.key, oneField.templateOptions.type)
        this.farmAssetForm.push(oneField)
      })
    })
  }

  getFarmAssets(){
    this.farmAssetsService.getFarmAssets().subscribe((res)=>{
      this.farmAssets=res
    })
  }
  createTableActions(){
    let actions=farmAssetTableActions
    console.log(actions)
    this.assetsTableActions= actions

  }
 
}
