import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageFarmProduceRoutingModule } from './manage-farm-produce-routing.module';

import { SharedModuleModule } from '../../sharedResources/module/shared-module.module';
import { CollectFarmProductComponent } from './components/collect-farm-product/collect-farm-product.component';
import { CollectedFarmProductsComponent } from './components/collected-farm-products/collected-farm-products.component';
import { SellFarmProductComponent } from './components/sell-farm-product/sell-farm-product.component';
import { SoldProductsComponent } from './components/sold-products/sold-products.component';
import { FarmProductInvoiceComponent } from './components/farm-product-invoice/farm-product-invoice.component';


@NgModule({
  declarations: [
  
    CollectFarmProductComponent,
    CollectedFarmProductsComponent,
    SellFarmProductComponent,
    SoldProductsComponent,
    FarmProductInvoiceComponent
  ],
  imports: [
    CommonModule,
    ManageFarmProduceRoutingModule,
    SharedModuleModule 
  ]
})
export class ManageFarmProduceModule { }
