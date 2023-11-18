import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token != null;
  }

  getUserKey(): number {
    const key = localStorage.getItem('userKey');
    if (key !== null) {
      return Number(key);
    } else {
      return 0;
    }
  }

}
