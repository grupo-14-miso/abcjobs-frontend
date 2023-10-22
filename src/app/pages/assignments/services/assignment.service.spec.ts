/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AssignmentService } from './assignment.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Assignment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AssignmentService],
    });
  });

  it('should ...', inject([AssignmentService], (service: AssignmentService) => {
    expect(service).toBeTruthy();
  }));
});
