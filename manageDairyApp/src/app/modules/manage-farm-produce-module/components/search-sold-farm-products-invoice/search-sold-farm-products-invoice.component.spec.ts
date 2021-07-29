import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSoldFarmProductsInvoiceComponent } from './search-sold-farm-products-invoice.component';

describe('SearchSoldFarmProductsInvoiceComponent', () => {
  let component: SearchSoldFarmProductsInvoiceComponent;
  let fixture: ComponentFixture<SearchSoldFarmProductsInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSoldFarmProductsInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSoldFarmProductsInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
