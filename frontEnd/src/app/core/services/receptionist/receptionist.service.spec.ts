import { TestBed } from '@angular/core/testing';

import { ReceptionistService } from './receptionist.service';

describe('ReceptionistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceptionistService = TestBed.get(ReceptionistService);
    expect(service).toBeTruthy();
  });
});
