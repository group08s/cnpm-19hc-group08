import { TestBed } from '@angular/core/testing';

import { ReceptionistPageService } from './receptionist-page.service';

describe('ReceptionistPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceptionistPageService = TestBed.get(ReceptionistPageService);
    expect(service).toBeTruthy();
  });
});
