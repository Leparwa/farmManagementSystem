import { ComponentFixture, TestBed } from '@angular/core/testing';

import { farmPurchasesComponent } from './farm-purchases.component';

describe('OrderAnimalFeedsComponent', () => {
  let component: farmPurchasesComponent;
  let fixture: ComponentFixture<farmPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ farmPurchasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(farmPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
