import { TestBed } from '@angular/core/testing';

import { UniqueemailcheckService } from './uniqueemailcheck.service';

describe('UniqueemailcheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniqueemailcheckService = TestBed.get(UniqueemailcheckService);
    expect(service).toBeTruthy();
  });
});
