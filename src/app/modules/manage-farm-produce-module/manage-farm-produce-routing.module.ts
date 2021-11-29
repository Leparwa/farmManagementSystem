import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectFarmProductComponent } from './components/collect-farm-product/collect-farm-product.component';
import { CollectedFarmProductsComponent } from './components/collected-farm-products/collected-farm-products.component';
import { FarmProductInvoiceComponent } from './components/farm-product-invoice/farm-product-invoice.component';
import { SellFarmProductComponent } from './components/sell-farm-product/sell-farm-product.component';
import { SoldProductsComponent } from './components/sold-products/sold-products.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "collected-products",
    pathMatch: "full",
  },
  {
    path: "collected-products",
    component: CollectedFarmProductsComponent,
  },
  {
    path: "collect-product",
    component: CollectFarmProductComponent,
  },
  {
    path: "sale-product",
    component: SellFarmProductComponent,
  },
  {
    path: "sold-product",
    component: SoldProductsComponent,
  },
  {
    path: "product-invoice",
    component: FarmProductInvoiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageFarmProduceRoutingModule { }
