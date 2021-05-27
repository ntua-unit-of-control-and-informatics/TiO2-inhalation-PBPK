import { TestBed } from '@angular/core/testing';

import { JaqpotApiService } from './jaqpot-api.service';

describe('JaqpotApiService', () => {
  let service: JaqpotApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JaqpotApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
