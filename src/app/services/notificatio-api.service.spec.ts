import { TestBed } from '@angular/core/testing';

import { NotificatioApiService } from './notificatio-api.service';

describe('NotificatioApiService', () => {
  let service: NotificatioApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificatioApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
