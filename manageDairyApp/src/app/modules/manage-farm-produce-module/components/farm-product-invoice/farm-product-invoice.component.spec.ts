import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmProductInvoiceComponent } from './farm-product-invoice.component';

describe('FarmProductInvoiceComponent', () => {
  let component: FarmProductInvoiceComponent;
  let fixture: ComponentFixture<FarmProductInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmProductInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmProductInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
