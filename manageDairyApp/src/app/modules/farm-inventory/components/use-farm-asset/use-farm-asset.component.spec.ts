import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFarmAssetComponent } from './use-farm-asset.component';

describe('UseFarmAssetComponent', () => {
  let component: UseFarmAssetComponent;
  let fixture: ComponentFixture<UseFarmAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseFarmAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseFarmAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
