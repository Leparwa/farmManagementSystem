import { TestBed } from '@angular/core/testing';

import { FarmAssetsService } from './farm-assets.service';

describe('FarmAssetsService', () => {
  let service: FarmAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
