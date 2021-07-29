import { Component, Input, OnInit } from '@angular/core';
import { SibasiFarmModuleForm } from '../../models/farmModels.model';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.scss']
})
export class CreateTableComponent implements OnInit {
@Input() sibasiFarmModuleForm:SibasiFarmModuleForm;
@Input() sibasiFarmData:[]=[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.sibasiFarmModuleForm)
  }

}
