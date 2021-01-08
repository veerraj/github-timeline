import { TestBed } from '@angular/core/testing';

import { FeaturesService } from './features.service';
import { HttpClientModule } from '@angular/common/http';

describe('FeaturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: FeaturesService = TestBed.get(FeaturesService);
    expect(service).toBeTruthy();
  });
});
