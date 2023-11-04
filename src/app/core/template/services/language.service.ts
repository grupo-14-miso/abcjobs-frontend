import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private selectLanguage: string = 'es';

  private selectedLanguageSubject = new BehaviorSubject<string>(this.selectLanguage);
  selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const language = this.route.snapshot.queryParams['language'];
        if (language) {
          this.selectLanguage = language;
          this.selectedLanguageSubject.next(language);
        }
      }
    });
  }

  setLanguage(language: string) {
    this.selectedLanguageSubject.next(language);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { language: language },
      queryParamsHandling: 'merge'
    });
  }

  get currentLanguage(): string {
    return this.selectLanguage;
  }
}
