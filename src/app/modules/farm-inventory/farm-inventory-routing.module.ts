import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFarmAssetComponent } from './components/add-farm-asset/add-farm-asset.component';
import { AddFarmInputsComponent } from './components/add-farm-inputs/add-farm-inputs.component';
import { AnimalsFeedsComponent } from './components/animals-feeds/animals-feeds.component';
import { FarmAssetsComponent } from './components/farm-assets/farm-assets.component';
import { FarmInputsComponent } from './components/farm-inputs/farm-inputs.component';
import { farmPurchasesComponent } from './components/farm-purchases/farm-purchases.component';
import { ReceiveAnimalFeedsComponent } from './components/receive-animal-feeds/receive-animal-feeds.component';
import { UseFarmAssetComponent } from './components/use-farm-asset/use-farm-asset.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "farm-assets",
    pathMatch: "full",
  },
  {
    path: "farm-assets",
    component: FarmAssetsComponent,
  },
  {
    path: "new-asset",
    component: AddFarmAssetComponent,
  },
  {
    path: "use-asset",
    component: UseFarmAssetComponent,
  },
  {
    path: "animal-feeds",
    component: AnimalsFeedsComponent,
  },
  {
    path: "order-feed",
    component: farmPurchasesComponent,
  },
  {
    path:'farm-inputs',
    component:FarmInputsComponent
  },
  {
    path:"add-input",
    component:AddFarmInputsComponent
  },
  {
    path: "new-purchase",
    component: farmPurchasesComponent,
  },
  {
    path: "receive-feed",
    component: ReceiveAnimalFeedsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmInventoryRoutingModule { }
