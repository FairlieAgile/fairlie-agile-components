import { TestBed } from '@angular/core/testing';

import { FaThemeService } from './fa-theme.service';

describe('FaThemeService', () => {
  let service: FaThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
