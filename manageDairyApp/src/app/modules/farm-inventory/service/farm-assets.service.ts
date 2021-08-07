import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFarmAsset } from '../../../sharedResources/models/farmAssets.model';
import { farmAssets } from '../../../sharedResources/Sample Data/farmAssetsSampleData.data';

@Injectable({
  providedIn: 'root'
})
export class FarmAssetsService {

  constructor() { }

  getFarmAssets():Observable<any> {
    return of(farmAssets)
  }

  createFarmAssets(asset:IFarmAsset):Observable<any> {
    return of(farmAssets.push(asset))
  }
}
