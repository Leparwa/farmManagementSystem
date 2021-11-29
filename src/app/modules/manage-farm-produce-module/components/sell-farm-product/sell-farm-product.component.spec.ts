import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellFarmProductComponent } from './sell-farm-product.component';

describe('SellFarmProductComponent', () => {
  let component: SellFarmProductComponent;
  let fixture: ComponentFixture<SellFarmProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellFarmProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellFarmProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
