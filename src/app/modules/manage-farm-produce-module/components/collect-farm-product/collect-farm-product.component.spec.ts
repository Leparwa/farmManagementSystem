import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectFarmProductComponent } from './collect-farm-product.component';

describe('CollectFarmProductComponent', () => {
  let component: CollectFarmProductComponent;
  let fixture: ComponentFixture<CollectFarmProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectFarmProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectFarmProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
