import { TestBed, inject } from '@angular/core/testing';

import { RetrieveProjectService } from './retrieve-project.service';

describe('RetrieveProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveProjectService]
    });
  });

  it('should be created', inject([RetrieveProjectService], (service: RetrieveProjectService) => {
    expect(service).toBeTruthy();
  }));
});
