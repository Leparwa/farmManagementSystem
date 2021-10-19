import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFarmInputsComponent } from './add-farm-inputs.component';

describe('AddFarmInputsComponent', () => {
  let component: AddFarmInputsComponent;
  let fixture: ComponentFixture<AddFarmInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFarmInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFarmInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
