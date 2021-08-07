import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { IFarmAsset } from '../../../../sharedResources/models/farmAssets.model';
import { farmAssetBasicForm } from '../../../../sharedResources/Forms/farmAssetForms/farmAssetBasicInfoForm.data';
import { FarmAssetsService } from '../../service/farm-assets.service';

@Component({
  selector: 'app-add-farm-asset',
  templateUrl: './add-farm-asset.component.html',
  styleUrls: ['./add-farm-asset.component.scss']
})
export class AddFarmAssetComponent implements OnInit {
  form = new FormGroup({});
  model:any = {};
  fields: FormlyFieldConfig[] = [];
  constructor(
    private farmAssetsService:FarmAssetsService
  ) { }

  ngOnInit(): void {
    this.fields=farmAssetBasicForm.fields
  }
  addAsset(asset:IFarmAsset){
    this.farmAssetsService.createFarmAssets(asset).subscribe((res)=>{
      console.log(res)
    })
  }
}
