import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFarmCollectedProducts, IFarmProduct, IFarmSoldProduct } from '../../../sharedResources/models/farmModels.model';
import { farmProducts } from '../../../sharedResources/Sample Data/farmSampleData.data';

@Injectable({
  providedIn: 'root'
})
export class ManageFarmService {

  constructor() { }


  postFarmData(farmProduct:IFarmCollectedProducts):Observable<{}> {
    return of(farmProducts.collectedProducts.push(farmProduct))
  }
  getFarmProduct():Observable<any> {
    return of(farmProducts.collectedProducts)
  }
  sellFarmProduct(product:IFarmSoldProduct){
    return of(farmProducts.soldProducts.push(product))
  }
  getSoldProducts(){
    return of(farmProducts.soldProducts)
  }
  getOneSoldProduct(index:number){
    return of(farmProducts.soldProducts[index])
  }
}
