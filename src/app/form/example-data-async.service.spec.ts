import { TestBed } from '@angular/core/testing';

import { ExampleDataAsyncService } from './example-data-async.service';

describe('ExampleDataAsyncService', () => {
  let service: ExampleDataAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleDataAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
