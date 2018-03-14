import { TestBed, inject } from '@angular/core/testing';

import { Product3Service } from './product3.service';

describe('Product3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product3Service]
    });
  });

  it('should be created', inject([Product3Service], (service: Product3Service) => {
    expect(service).toBeTruthy();
  }));
});
