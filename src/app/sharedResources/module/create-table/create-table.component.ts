import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SibasiFarmModuleForm } from '../../models/farmModels.model';
import { IFarmTablActions } from '../../models/tableActions.model';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.scss']
})
export class CreateTableComponent implements OnInit {
@Input() sibasiFarmModuleForm:SibasiFarmModuleForm;
@Input() sibasiFarmData:[]=[]
@Input() isReciept:Boolean
@Input() sibasiTableActions:{}[]=[]
@Output() itemIndex = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  
  }
  emitDataIndex(i, action){
    let emittedData ={
      index: `${i}`,
      action:`${action}`
    }
    this.itemIndex.emit(emittedData)
  }
}
