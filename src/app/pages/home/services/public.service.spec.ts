/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublicService } from './public.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Public', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PublicService]
    });
  });

  it('should ...', inject([PublicService], (service: PublicService) => {
    expect(service).toBeTruthy();
  }));
});
