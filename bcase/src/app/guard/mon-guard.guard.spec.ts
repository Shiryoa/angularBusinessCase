import { TestBed } from '@angular/core/testing';

import { MonGuardGuard } from './mon-guard.guard';

describe('MonGuardGuard', () => {
  let guard: MonGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MonGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
