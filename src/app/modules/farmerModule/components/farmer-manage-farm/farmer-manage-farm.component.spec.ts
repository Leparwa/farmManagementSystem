import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerManageFarmComponent } from './farmer-manage-farm.component';

describe('FarmerManageFarmComponent', () => {
  let component: FarmerManageFarmComponent;
  let fixture: ComponentFixture<FarmerManageFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerManageFarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerManageFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
