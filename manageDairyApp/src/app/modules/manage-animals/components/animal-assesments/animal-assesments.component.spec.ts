import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAssesmentsComponent } from './animal-assesments.component';

describe('AnimalAssesmentsComponent', () => {
  let component: AnimalAssesmentsComponent;
  let fixture: ComponentFixture<AnimalAssesmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAssesmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalAssesmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
