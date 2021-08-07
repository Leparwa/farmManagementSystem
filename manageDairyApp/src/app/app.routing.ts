import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers/default-layout';
import { FarmerDasboardComponent } from './modules/farmerModule/components/farmer-dasboard/farmer-dasboard.component';

export const routes: Routes = [

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        redirectTo: 'farmer',
        pathMatch: 'full',
      },
      {
        path: 'farmer',
        loadChildren: () => import('./modules/farmerModule/farmer.module').then(m => m.FarmerModule)
      },
      {
        path: 'manage-farm',
        loadChildren: () => import('./modules/manage-farm-produce-module/manage-farm-produce.module').then(m => m.ManageFarmProduceModule)
      },
      {
        path: 'manage-animal',
        loadChildren: () => import('./modules/manage-farm/manage-farm.module').then(m => m.ManageAnimalsModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('./modules/farm-inventory/farm-inventory.module').then(m => m.FarmInventoryModule)
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
