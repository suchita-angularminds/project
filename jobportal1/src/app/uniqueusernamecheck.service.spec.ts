import { TestBed } from '@angular/core/testing';

import { UniqueusernamecheckService } from './uniqueusernamecheck.service';

describe('UniqueusernamecheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniqueusernamecheckService = TestBed.get(UniqueusernamecheckService);
    expect(service).toBeTruthy();
  });
});
