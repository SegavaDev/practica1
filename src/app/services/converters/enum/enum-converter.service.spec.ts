import { TestBed } from '@angular/core/testing';

import { EnumConverterService } from './enum-converter.service';

describe('EnumConverterService', () => {
  let service: EnumConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnumConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
