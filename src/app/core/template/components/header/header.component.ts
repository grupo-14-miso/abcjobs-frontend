import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  targetLanguage : string = "es"
  constructor(private languageService: LanguageService) {
  }

  ngOnInit() {

  }


  onChange(event: Event): void {
    const targetLanguage = (event.target as HTMLSelectElement).value;
    this.languageService.setLanguage(targetLanguage);
    this.targetLanguage = targetLanguage;
  }

}
