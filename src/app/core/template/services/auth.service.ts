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

  getRole(): string {
    const role = localStorage.getItem('role');
    if (role !== null) {
      return role;
    } else {
      return "";
    }
  }

  getName(): string {
    const name = localStorage.getItem('name');
    if (name !== null) {
      return name;
    } else {
      return "";
    }
  }

  isCandidate(): boolean {
    const role = localStorage.getItem('role');
    if (role == "Candidate") {
      return true;
    } else {
      return false;
    }
  }

  isCompany(): boolean {
    const role = localStorage.getItem('role');
    if (role == "Company") {
      return true;
    } else {
      return false;
    }
  }

  isAdmin(): boolean {
    const role = localStorage.getItem('role');
    if (role == "Admin") {
      return true;
    } else {
      return false;
    }
  }

}
