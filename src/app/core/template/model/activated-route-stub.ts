import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ActivatedRouteStub {
    // Provide the test data
    private testData = {
      // Define aquí las propiedades que necesitas para tus pruebas.
    };
  private subject = new BehaviorSubject(this.testData);

  readonly data = this.subject.asObservable();

  setData(data: any) {
    this.subject.next(data);
  }
}
