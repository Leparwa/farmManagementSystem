import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectFarmProductComponent } from './components/collect-farm-product/collect-farm-product.component';
import { CollectedFarmProductsComponent } from './components/collected-farm-products/collected-farm-products.component';
import { SearchSoldFarmProductsInvoiceComponent } from './components/search-sold-farm-products-invoice/search-sold-farm-products-invoice.component';
import { SellFarmProductComponent } from './components/sell-farm-product/sell-farm-product.component';


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
    path: "product-invoice",
    component: SearchSoldFarmProductsInvoiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageFarmProduceRoutingModule { }
