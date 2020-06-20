import { TestBed } from '@angular/core/testing';

import { RestaurantPageService } from './restaurant-page.service';

describe('RestaurantPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantPageService = TestBed.get(RestaurantPageService);
    expect(service).toBeTruthy();
  });
});
