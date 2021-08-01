import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFarmAnimal, IFarmAvailableAnimal } from '../../../sharedResources/models/farmModels.model';
import { farmAnimals } from '../../../sharedResources/Sample Data/farmSampleData.data';

@Injectable({
  providedIn: 'root'
})
export class ManageAnimalsService {

  constructor() { }


  postFarmData(farmAnimal:IFarmAvailableAnimal):Observable<{}> {
    return of(farmAnimals.availableAnimals.push(farmAnimal))
  }
  getFarmAnimals():Observable<any> {
    return of(farmAnimals.availableAnimals)
  }
  sellAnimal(animal){
    return of(farmAnimals.soldAnimals.push(animal))
  }
  getSoldAnimals(){
    return of(farmAnimals.soldAnimals)
  }
}
