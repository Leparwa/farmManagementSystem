import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsFeedsComponent } from './animals-feeds.component';

describe('AnimalsFeedsComponent', () => {
  let component: AnimalsFeedsComponent;
  let fixture: ComponentFixture<AnimalsFeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalsFeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
