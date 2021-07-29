import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { IFarmProduct } from '../../../../sharedResources/models/farmModels.model';
import { RegisterNewAnimalForm } from '../../../../sharedResources/Forms/addNewAnimalForm.data';
import { collectFarmProductForm } from '../../../../sharedResources/Forms/collectFarmProductForm.data';
import {  collectedFarmProduct } from '../../../../sharedResources/Sample Data/farmSampleData.data'
import { ManageFarmService } from '../../services/manage-farm.service';
@Component({
  selector: 'app-collect-farm-product',
  templateUrl: './collect-farm-product.component.html',
  styleUrls: ['./collect-farm-product.component.scss']
})
export class CollectFarmProductComponent implements OnInit {
   form = new FormGroup({});
   model = {};
   fields: FormlyFieldConfig[] = [];
    farmProduct:IFarmProduct[] =[]
  constructor(private manageFarmService: ManageFarmService) { }

  ngOnInit(): void {
  
    this.fields = collectFarmProductForm.fields
  }

  colllectProduct(product){
    const formatProduct={... product.animalProduct, ...product}
    this.manageFarmService.postFarmData(formatProduct).subscribe(
    (res)=>{
     
    },
    (err)=>{
      
    }
    )
  }
}
