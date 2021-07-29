import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerDasboardComponent } from './farmer-dasboard.component';

describe('FarmerDasboardComponent', () => {
  let component: FarmerDasboardComponent;
  let fixture: ComponentFixture<FarmerDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerDasboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
