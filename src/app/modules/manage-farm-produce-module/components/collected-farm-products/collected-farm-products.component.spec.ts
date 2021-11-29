import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedFarmProductsComponent } from './collected-farm-products.component';

describe('CollectedFarmProductsComponent', () => {
  let component: CollectedFarmProductsComponent;
  let fixture: ComponentFixture<CollectedFarmProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectedFarmProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedFarmProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
