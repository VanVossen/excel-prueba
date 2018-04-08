import { TestBed, inject } from '@angular/core/testing';

import { ConnectingFredService } from './connecting-fred.service';

describe('ConnectingFredService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectingFredService]
    });
  });

  it('should be created', inject([ConnectingFredService], (service: ConnectingFredService) => {
    expect(service).toBeTruthy();
  }));
});
