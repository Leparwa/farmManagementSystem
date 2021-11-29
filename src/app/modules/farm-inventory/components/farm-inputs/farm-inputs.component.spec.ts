import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmInputsComponent } from './farm-inputs.component';

describe('FarmInputsComponent', () => {
  let component: FarmInputsComponent;
  let fixture: ComponentFixture<FarmInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
