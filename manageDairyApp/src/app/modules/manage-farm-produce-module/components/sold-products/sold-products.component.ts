import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sellFarmProductForm } from '../../../../sharedResources/Forms/sellFarmProductForm.data';
import { IFarmSoldProduct } from '../../../../sharedResources/models/farmModels.model';
import { ManageFarmService } from '../../services/manage-farm.service';

@Component({
  selector: 'app-sold-products',
  templateUrl: './sold-products.component.html',
  styleUrls: ['./sold-products.component.scss']
})
export class SoldProductsComponent implements OnInit {
  sellFarmProductForm:{}[]=[]
  soldFarmProducts:IFarmSoldProduct[]=[]
  constructor(
    private manageFarmService:ManageFarmService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createTable()
    this.getSoldFarmProducts()
  }

  createTable(){
    let fields =sellFarmProductForm.fields;
    fields.forEach((field)=>{
      field.fieldGroup.forEach((fieldGroup)=>{
        let oneField= {...field, ...fieldGroup}
        // new collectMilkFormModel(oneField.key, oneField.templateOptions.type)
        this.sellFarmProductForm.push(oneField)
      })
    })
  }
  getSoldFarmProducts(){
    this.manageFarmService.getSoldProducts().subscribe((res)=>{
      this.soldFarmProducts=res
    })
  }
  viewReceipt(itemIndex:any){
    this.router.navigate(['/manage-farm/product-invoice'], { queryParams: { product: `${itemIndex}` } });

    console.log(itemIndex)
  }
}
