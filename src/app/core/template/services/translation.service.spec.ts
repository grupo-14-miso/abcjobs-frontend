/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TranslationService } from './translation.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Translation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TranslationService]
    });
  });

  it('should ...', inject([TranslationService], (service: TranslationService) => {
    expect(service).toBeTruthy();
  }));
});
