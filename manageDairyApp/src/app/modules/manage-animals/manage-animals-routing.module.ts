import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AddStallComponent } from './components/add-stall/add-stall.component';
import { AnimalAssesmentsComponent } from './components/animal-assesments/animal-assesments.component';
import { AnimalHealthRecordsComponent } from './components/animal-health-records/animal-health-records.component';
import { AnimalHistoryComponent } from './components/animal-history/animal-history.component';
import { AnimalProfileComponent } from './components/animal-profile/animal-profile.component';
import { AnimalSchedulesComponent } from './components/animal-schedules/animal-schedules.component';
import { AnimalsListComponent } from './components/animals-list/animals-list.component';
import { SellAnimalComponent } from './components/sell-animal/sell-animal.component';
import { SoldAnimalsComponent } from './components/sold-animals/sold-animals.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "animals-list",
    pathMatch: "full",
  },
  {
    path: "animals-list",
    component: AnimalsListComponent,
  },
  {
    path: "new-animal",
    component: AddAnimalComponent,
  },
  {
    path: "sell",
    component: SellAnimalComponent,
  },
  {
    path: "sold-animals",
    component: SoldAnimalsComponent,
  },
  {
    path: "add-stall",
    component: AddStallComponent,
  },
  {
    path: "profile",
    component: AnimalProfileComponent,

    children:[
      {
        path: "",
        redirectTo: "history",
        pathMatch: "full",
      },
      {
        path:'history',
        component:AnimalHistoryComponent
      },
      {
        path:'medical-records',
        component:AnimalHealthRecordsComponent
      },
      {
        path:'schedules',
        component:AnimalSchedulesComponent
      },
      {
        path:'assessment',
        component:AnimalAssesmentsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAnimalsRoutingModule { }
