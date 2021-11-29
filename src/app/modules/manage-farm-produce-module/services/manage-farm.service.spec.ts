import { TestBed } from '@angular/core/testing';

import { ManageFarmService } from './manage-farm.service';

describe('ManageFarmService', () => {
  let service: ManageFarmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageFarmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
