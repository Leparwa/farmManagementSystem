import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmAssetsComponent } from './farm-assets.component';

describe('FarmAssetsComponent', () => {
  let component: FarmAssetsComponent;
  let fixture: ComponentFixture<FarmAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
