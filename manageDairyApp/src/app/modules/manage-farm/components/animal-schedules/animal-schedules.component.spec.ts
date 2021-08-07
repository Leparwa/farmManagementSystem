import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSchedulesComponent } from './animal-schedules.component';

describe('AnimalSchedulesComponent', () => {
  let component: AnimalSchedulesComponent;
  let fixture: ComponentFixture<AnimalSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
