import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageFarmProduceRoutingModule } from './manage-farm-produce-routing.module';

import { SharedModuleModule } from '../../sharedResources/module/shared-module.module';
import { CollectFarmProductComponent } from './components/collect-farm-product/collect-farm-product.component';
import { CollectedFarmProductsComponent } from './components/collected-farm-products/collected-farm-products.component';
import { SearchSoldFarmProductsInvoiceComponent } from './components/search-sold-farm-products-invoice/search-sold-farm-products-invoice.component';
import { SellFarmProductComponent } from './components/sell-farm-product/sell-farm-product.component';


@NgModule({
  declarations: [
  
    CollectFarmProductComponent,
    CollectedFarmProductsComponent,
    SearchSoldFarmProductsInvoiceComponent,
    SellFarmProductComponent
  ],
  imports: [
    CommonModule,
    ManageFarmProduceRoutingModule,
    SharedModuleModule 
  ]
})
export class ManageFarmProduceModule { }
