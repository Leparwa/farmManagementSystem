import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHealthRecordsComponent } from './animal-health-records.component';

describe('AnimalHealthRecordsComponent', () => {
  let component: AnimalHealthRecordsComponent;
  let fixture: ComponentFixture<AnimalHealthRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalHealthRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalHealthRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
