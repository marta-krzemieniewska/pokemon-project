import { TestBed } from '@angular/core/testing';

import { ListViewResolverService } from './list-view-resolver.service';

describe('ListViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListViewResolverService = TestBed.get(ListViewResolverService);
    expect(service).toBeTruthy();
  });
});
