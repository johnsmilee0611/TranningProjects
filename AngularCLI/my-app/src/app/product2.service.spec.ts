import { TestBed, inject } from '@angular/core/testing';

import { Product2Service } from './product2.service';

describe('Product2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product2Service]
    });
  });

  it('should be created', inject([Product2Service], (service: Product2Service) => {
    expect(service).toBeTruthy();
  }));
});
