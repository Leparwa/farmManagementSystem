import { Component, Input, OnInit } from '@angular/core';
import { IFarmPurchase } from '../../../../sharedResources/models/farmPurchase.model';
import { FarmInventoryService } from '../../service/farm-inventory.service';

@Component({
  selector: 'app-receive-animal-feeds',
  templateUrl: './receive-animal-feeds.component.html',
  styleUrls: ['./receive-animal-feeds.component.scss']
})
export class ReceiveAnimalFeedsComponent implements OnInit {
@Input() purchaseInProgress:IFarmPurchase
farmerPurchaseVendors:IFarmPurchase[]=[]
  constructor(
    private inventoryService:FarmInventoryService
  ) { }

  ngOnInit(): void {
    this.getVendors()
  }

  getVendors(){
    this.inventoryService.getVendorsByItemsCategory(this.purchaseInProgress.itemType).subscribe((res)=>{
      console.log(res)
    })
  }
}
