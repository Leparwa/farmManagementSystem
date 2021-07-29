import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerDasboardComponent } from './components/farmer-dasboard/farmer-dasboard.component';
import { FarmerAnimalRecordsComponent } from './components/farmer-animal-records/farmer-animal-records.component';
import { FarmerManageFarmComponent } from './components/farmer-manage-farm/farmer-manage-farm.component';


@NgModule({
  declarations: [
    FarmerDasboardComponent,
    FarmerAnimalRecordsComponent,
    FarmerManageFarmComponent
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule
  ]
})
export class FarmerModule { }
