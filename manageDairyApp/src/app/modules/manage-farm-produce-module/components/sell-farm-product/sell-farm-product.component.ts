import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { IFarmSoldProduct } from '../../../../sharedResources/models/farmModels.model';
import { sellFarmProductForm } from '../../../../sharedResources/Forms/sellFarmProductForm.data';
import { ManageFarmService } from '../../services/manage-farm.service';

@Component({
  selector: 'app-sell-farm-product',
  templateUrl: './sell-farm-product.component.html',
  styleUrls: ['./sell-farm-product.component.scss']
})
export class SellFarmProductComponent implements OnInit {
  form = new FormGroup({});
  model:any = {};
  fields: FormlyFieldConfig[] = [];
  soldFarmProduct:IFarmSoldProduct[] =[]
  constructor(
    private manageFarmService: ManageFarmService
  ) { }

  ngOnInit(): void {
    this.fields =  sellFarmProductForm.fields
  }


  sellProduct(product){
    this.manageFarmService.sellFarmProduct(product).subscribe((res)=>{
      
    })
  }


  calculateTotalPrice(){
    let totalPrice = 0+(this.model.pricePerQuantity*this.model.quantityBought)
    let balance= 0+(this.model.amountPaid-this.model.totalPrice)
    if(this.model.productType==='meat'){
      this.model = {
        ...this.model,
        pricePerQuantity:112,
        totalPrice: totalPrice,
        balance:balance
      }
  }
    else if(this.model.productType==='milk'){
      this.model = {
        ...this.model,
        pricePerQuantity:25,
        totalPrice: totalPrice,
        balance:balance

      }
  }
    else if(this.model.productType==='egg'){
      this.model = {
        ...this.model,
        pricePerQuantity:14,
        totalPrice: totalPrice,
        balance:balance

      }
  }
  else if(this.model.productType==='hidesOrSkin'){
    this.model = {
      ...this.model,
      pricePerQuantity:55,
      totalPrice: totalPrice,
      balance:balance

    }
  }
  else{
    this.model = {
      ...this.model,
    
    }
  }
}
}
