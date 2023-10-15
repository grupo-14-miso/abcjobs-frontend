import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  private isLoading = new BehaviorSubject<boolean>(true);
  public isLoading$ = this.isLoading.asObservable();

  showPreloader() {
    this.isLoading.next(false); // Ocultar el preloader, estableciendo "false"
  }

  hidePreloader() {
    this.isLoading.next(true); // Mostrar el preloader, estableciendo "true"
  }

}
