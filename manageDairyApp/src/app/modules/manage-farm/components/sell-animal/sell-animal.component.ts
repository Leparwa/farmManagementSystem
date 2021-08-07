import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { sellFarmAnimalForm } from '../../../../sharedResources/Forms/sellAnimalForm.data';
import { ManageAnimalsService } from '../../services/manage-animals.service';

@Component({
  selector: 'app-sell-animal',
  templateUrl: './sell-animal.component.html',
  styleUrls: ['./sell-animal.component.scss']
})
export class SellAnimalComponent implements OnInit {
  form = new FormGroup({});
  model:any = {};
  fields: FormlyFieldConfig[] = [];
  constructor(
    private manageAnimalsService:ManageAnimalsService
  ) { }

  ngOnInit(): void {
    this.fields = sellFarmAnimalForm.fields
  }


    sellAnimal(animal){
      this.manageAnimalsService.sellAnimal(animal).subscribe((res)=>{
        
      })
    }
    
}
