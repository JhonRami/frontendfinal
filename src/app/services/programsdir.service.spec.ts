import { TestBed } from '@angular/core/testing';

import { ProgramsdirService } from './programsdir.service';

describe('ProgramsdirService', () => {
  let service: ProgramsdirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramsdirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
