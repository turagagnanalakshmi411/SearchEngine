import { TestBed } from '@angular/core/testing';

import { AutoService } from './auto.service.service';

describe('AutoServiceService', () => {
  let service: AutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
