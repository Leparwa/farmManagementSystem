import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldAnimalsComponent } from './sold-animals.component';

describe('SoldAnimalsComponent', () => {
  let component: SoldAnimalsComponent;
  let fixture: ComponentFixture<SoldAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoldAnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
