import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFarmAssetComponent } from './add-farm-asset.component';

describe('AddFarmAssetComponent', () => {
  let component: AddFarmAssetComponent;
  let fixture: ComponentFixture<AddFarmAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFarmAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFarmAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
