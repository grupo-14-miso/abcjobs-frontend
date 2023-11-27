import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  targetLanguage : string = "es"
  constructor(
    private languageService: LanguageService,
    public authService: AuthService,
    private router: Router,) {
  }


  ngOnInit() {}

  onChange(event: Event): void {
    const targetLanguage = (event.target as HTMLSelectElement).value;
    this.languageService.setLanguage(targetLanguage);
    this.targetLanguage = targetLanguage;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userKey');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    this.router.navigate(['/']);
    }
}
