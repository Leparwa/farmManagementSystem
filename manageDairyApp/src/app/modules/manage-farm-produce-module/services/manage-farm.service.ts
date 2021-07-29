import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFarmProduct } from '../../../sharedResources/models/farmModels.model';
import { collectedFarmProduct } from '../../../sharedResources/Sample Data/farmSampleData.data';

@Injectable({
  providedIn: 'root'
})
export class ManageFarmService {

  constructor() { }


  postFarmData(farmProduct:IFarmProduct):Observable<{}> {
    return of(collectedFarmProduct.push(farmProduct))
  }
  getFarmProduct():Observable<any> {
    return of(collectedFarmProduct)
  }
}
