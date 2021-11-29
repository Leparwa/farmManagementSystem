import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { farmInputForm } from '../../../../sharedResources/Forms/farmInputsForm/farmInputForm.data';
import { FarmInventoryService } from '../../service/farm-inventory.service';

@Component({
  selector: 'app-add-farm-inputs',
  templateUrl: './add-farm-inputs.component.html',
  styleUrls: ['./add-farm-inputs.component.scss']
})
export class AddFarmInputsComponent implements OnInit {
  form = new FormGroup({});
  model:any = {};
  fields: FormlyFieldConfig[] = [];
  constructor(
    private farmInventoryService:FarmInventoryService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fields= farmInputForm.fields
    let itemIndex = this.activatedRoute.snapshot.queryParams.id
    if(itemIndex){
      this.getInputToUpdate(itemIndex)
    }

  }
  addInput(farmInput){
    this.farmInventoryService.addFarmInputs(farmInput).subscribe((res)=>{
      console.log(res)
    })
  }

  getInputToUpdate(id:any){
    this.farmInventoryService.getOneFarmInput(id).subscribe((res)=>{
      this.model = res
      console.log(res)
    })
  }
}
