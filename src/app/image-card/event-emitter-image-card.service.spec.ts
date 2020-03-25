import { TestBed } from '@angular/core/testing';

import { EventEmitterImageCardService } from './event-emitter-image-card.service';

describe('EventEmitterImageCardService', () => {
  let service: EventEmitterImageCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEmitterImageCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
