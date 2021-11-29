import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellAnimalComponent } from './sell-animal.component';

describe('SellAnimalComponent', () => {
  let component: SellAnimalComponent;
  let fixture: ComponentFixture<SellAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
