import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveAnimalFeedsComponent } from './receive-animal-feeds.component';

describe('ReceiveAnimalFeedsComponent', () => {
  let component: ReceiveAnimalFeedsComponent;
  let fixture: ComponentFixture<ReceiveAnimalFeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveAnimalFeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveAnimalFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
