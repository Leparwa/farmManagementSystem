import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmInventoryRoutingModule } from './farm-inventory-routing.module';
import { AnimalsFeedsComponent } from './components/animals-feeds/animals-feeds.component';
import { farmPurchasesComponent } from './components/farm-purchases/farm-purchases.component';
import { ReceiveAnimalFeedsComponent } from './components/receive-animal-feeds/receive-animal-feeds.component';
import { FarmAssetsComponent } from './components/farm-assets/farm-assets.component';
import { AddFarmAssetComponent } from './components/add-farm-asset/add-farm-asset.component';
import { UseFarmAssetComponent } from './components/use-farm-asset/use-farm-asset.component';
import { SharedModuleModule } from '../../sharedResources/module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmInputsComponent } from './components/farm-inputs/farm-inputs.component';
import { AddFarmInputsComponent } from './components/add-farm-inputs/add-farm-inputs.component';


@NgModule({
  declarations: [
    AnimalsFeedsComponent,
    farmPurchasesComponent,
    ReceiveAnimalFeedsComponent,
    FarmAssetsComponent,
    AddFarmAssetComponent,
    UseFarmAssetComponent,
    FarmInputsComponent,
    AddFarmInputsComponent
  ],
  imports: [
    CommonModule,
    FarmInventoryRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FarmInventoryModule { }
