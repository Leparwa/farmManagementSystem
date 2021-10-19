import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { farmInputs } from '../../../sharedResources/Sample Data/farmInputsData.data';
import { IFarmAsset } from '../../../sharedResources/models/farmAssets.model';
import { farmAssets } from '../../../sharedResources/Sample Data/farmAssetsSampleData.data';
import { farmPurchases } from '../../../sharedResources/Sample Data/farmPurchasesData.data';
import { IFarmPurchase } from '../../../sharedResources/models/farmPurchase.model';
import { vendors } from '../../../sharedResources/Sample Data/farmVendors.data';
import { IFarmvendor } from '../../../sharedResources/models/vendors.model';

@Injectable({
  providedIn: 'root'
})
export class FarmInventoryService {

  constructor() { }

  getFarmAssets():Observable<any> {
    return of(farmAssets)
  }

  createFarmAssets(asset:IFarmAsset):Observable<any> {
    return of(farmAssets.push(asset))
  }

  addFarmInputs(input:{}):Observable<any>{
    return of(farmInputs.push(input))
  }
  getFarmInputs():Observable<any>{
    return of(farmInputs)
  }

  getOneFarmInput(id):Observable<any>{
    return of(farmInputs[id])
  }
  updateInput(id, input){
    farmInputs.copyWithin(0, id)
  }

  //farm purchases

  getFarmPurchases():Observable<any>{
    return of(farmPurchases)
  }
  
  newFarmPurchase(purchase: IFarmPurchase):Observable<any>{
    return of(farmPurchases.push(purchase))
  }

  //farm vendors

  getVendorsByItemsCategory(category):Observable<any>{
    let matchVendors:IFarmvendor[]=[]
  let r = vendors.map((val, vendors)=> val.vendorItemsCategories==='animals-feeds', vendors)
  console.log(r)
    return of(r)
  }
}
