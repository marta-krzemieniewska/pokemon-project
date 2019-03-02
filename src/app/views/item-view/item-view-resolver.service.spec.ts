import { TestBed } from '@angular/core/testing';

import { ItemViewResolverService } from './item-view-resolver.service';

describe('ItemViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemViewResolverService = TestBed.get(ItemViewResolverService);
    expect(service).toBeTruthy();
  });
});
