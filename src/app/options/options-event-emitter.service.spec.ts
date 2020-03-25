import { TestBed } from '@angular/core/testing';

import { OptionsEventEmitterService } from './options-event-emitter.service';

describe('OptionsEventEmitterService', () => {
  let service: OptionsEventEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionsEventEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
