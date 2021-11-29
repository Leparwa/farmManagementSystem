import { TestBed } from '@angular/core/testing';

import { FarmInventoryService } from './farm-inventory.service';

describe('FarmAssetsService', () => {
  let service: FarmInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
