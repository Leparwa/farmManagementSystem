import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAnimalsRoutingModule } from './manage-animals-routing.module';
import { AnimalsListComponent } from './components/animals-list/animals-list.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { SellAnimalComponent } from './components/sell-animal/sell-animal.component';
import { StallsComponent } from './components/stalls/stalls.component';
import { AnimalProfileComponent } from './components/animal-profile/animal-profile.component';
import { SharedModuleModule } from '../../sharedResources/module/shared-module.module';
import { AnimalHistoryComponent } from './components/animal-history/animal-history.component';
import { AnimalHealthRecordsComponent } from './components/animal-health-records/animal-health-records.component';
import { AnimalSchedulesComponent } from './components/animal-schedules/animal-schedules.component';
import { AnimalAssesmentsComponent } from './components/animal-assesments/animal-assesments.component';
import { SoldAnimalsComponent } from './components/sold-animals/sold-animals.component';
import { AddStallComponent } from './components/add-stall/add-stall.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [
    AnimalsListComponent,
    AddAnimalComponent,
    SellAnimalComponent,
    StallsComponent,
    AnimalProfileComponent,
    AnimalHistoryComponent,
    AnimalHealthRecordsComponent,
    AnimalSchedulesComponent,
    AnimalAssesmentsComponent,
    SoldAnimalsComponent,
    AddStallComponent
  ],
  imports: [
    CommonModule,
    ManageAnimalsRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule,
    BrowserAnimationsModule,
    MultiSelectModule


  ]
})
export class ManageAnimalsModule { }
