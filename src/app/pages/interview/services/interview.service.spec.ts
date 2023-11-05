/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterviewService } from './interview.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Interview', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [InterviewService]
    });
  });

  it('should ...', inject([InterviewService], (service: InterviewService) => {
    expect(service).toBeTruthy();
  }));
});
