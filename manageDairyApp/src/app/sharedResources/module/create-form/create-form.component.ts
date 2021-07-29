import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
@Input() form: FormGroup;
@Input() model: {};
@Input() fields: FormlyFieldConfig[];
@Output() submitModel = new EventEmitter();
options: FormlyFormOptions = {};

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(model: {}) {
    this.submitModel.emit(model);
  }
}
