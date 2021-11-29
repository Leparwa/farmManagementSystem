import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAnimalRecordsComponent } from './farmer-animal-records.component';

describe('FarmerAnimalRecordsComponent', () => {
  let component: FarmerAnimalRecordsComponent;
  let fixture: ComponentFixture<FarmerAnimalRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerAnimalRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAnimalRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
