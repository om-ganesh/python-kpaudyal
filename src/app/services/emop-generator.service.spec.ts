import { TestBed } from '@angular/core/testing';

import { EmopGeneratorService } from './emop-generator.service';

describe('EmopGeneratorService', () => {
  let service: EmopGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmopGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
