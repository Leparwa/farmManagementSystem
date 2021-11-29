import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerAnimalRecordsComponent } from './components/farmer-animal-records/farmer-animal-records.component';
import { FarmerDasboardComponent } from './components/farmer-dasboard/farmer-dasboard.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dasboard",
    pathMatch: "full",
  },
  {
    path: "dasboard",
    component: FarmerDasboardComponent,
  },
  {
    path: "farm-record",
    component: FarmerAnimalRecordsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
