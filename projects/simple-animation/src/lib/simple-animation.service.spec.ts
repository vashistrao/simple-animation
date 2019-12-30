import { TestBed } from '@angular/core/testing';

import { SimpleAnimationService } from './simple-animation.service';

describe('SimpleAnimationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleAnimationService = TestBed.get(SimpleAnimationService);
    expect(service).toBeTruthy();
  });
});
