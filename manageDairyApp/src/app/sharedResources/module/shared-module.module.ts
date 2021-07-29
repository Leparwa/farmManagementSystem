import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTableComponent } from './create-table/create-table.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldFile } from '../fileUploadFormlyConfig/file-type.component';



@NgModule({
  declarations: [
    CreateTableComponent,
    CreateFormComponent,
    
  ],
  imports: [
    CommonModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
      ],
    }),
    FormlyBootstrapModule,

  ],
  exports: [CreateTableComponent, CreateFormComponent]

})
export class SharedModuleModule { }
