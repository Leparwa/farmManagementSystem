import { TestBed } from '@angular/core/testing';

import { ManageAnimalsService } from './manage-animals.service';

describe('ManageAnimalsService', () => {
  let service: ManageAnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageAnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
