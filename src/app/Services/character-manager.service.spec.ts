import { TestBed } from '@angular/core/testing';

import { CharacterManagerService } from './character-manager.service';

describe('CharacterManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterManagerService = TestBed.get(CharacterManagerService);
    expect(service).toBeTruthy();
  });
});
