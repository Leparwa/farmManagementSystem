import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { farmPurchases } from '../../../../sharedResources/Sample Data/farmPurchasesData.data';
import { farmPurchasesForm } from '../../../../sharedResources/Forms/farmPurchasesForm/newPurchaseForm.data';
import { FarmInventoryService } from '../../service/farm-inventory.service';
import { farmEmployees } from '../../../../sharedResources/Sample Data/farmSampleData.data';
import { IFarmPurchase, IPurchaseStatus } from '../.././../../sharedResources/models/farmPurchase.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-animal-feeds',
  templateUrl: './farm-purchases.component.html',
  styleUrls: ['./farm-purchases.component.scss']
})
export class farmPurchasesComponent implements OnInit {
  form = new FormGroup({});
  model:any = {};
  fields: FormlyFieldConfig[] = [];
  isShowVendors:boolean
  title:string ='Make New Purchase'
  purchaseInProgres:IFarmPurchase
  isContinue:boolean
  purchaseStatus:IPurchaseStatus
  constructor(
    private farmInventoryService: FarmInventoryService,
    private router:Router
  ) { }

  ngOnInit(): void {
    
    this.fields= farmPurchasesForm.fields

  }

  newPurchase(purchase){
    this.farmInventoryService.newFarmPurchase(purchase).subscribe((res)=>{
      console.log(res)
    })
  }
  generateRandomIds(arg:any, dept:string){
    let randomId = `SIBASI-FARM-${dept}/`+new Date().getFullYear()+'/'+(arg.length +1)
    return randomId;
  }
  getModelChages(){
    if(this.model.purchaseType==='suggest-vendor' && this.model.purchaseType){
      this.isContinue=true
      this.suggestVendor()
    }
    else if(this.model.purchaseType ==='new-vendor'){
      this.newVendor()
    }
  }

  suggestVendor(){
    this.isShowVendors =true
    this.title = 'New Purchase In Progress'
    let purchaseId = this.generateRandomIds(farmPurchases, 'PURCHASE')
    let datepurchased = new Date()
    let staffID = this.generateRandomIds(farmEmployees, 'STAFF')
    this.purchaseStatus={
      isPaid:false,
      isDelivered:false,
      progress:'IN PROGRESS'

    }
    let pre_order ={
      purchaseId: `${purchaseId}`,
      datePurchased:`${datepurchased}`,
      purchaseMadeById:`${staffID}`,
      purchaseMadeBy:`${this.model.purchaseMadeBy}`,
      itemType:`${this.model.itemType}`,
      itemName:`${this.model.itemName}`,
      purchaseType:`${this.model.purchaseType}`,
      status: this.purchaseStatus,
    }
    console.log(pre_order)
    this.purchaseInProgres = pre_order
    this.newPurchase(pre_order)

  }

  newVendor(){

  }

}
