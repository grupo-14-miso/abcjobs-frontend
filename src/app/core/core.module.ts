import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './template/components/header/header.component';
import { MainComponent } from './template/components/main/main.component';
import { FooterComponent } from './template/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PreloaderDirective } from './template/directives/preloader.directive';
import { TranslationService } from './template/services/translation.service';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from './template/pipes/translate.pipe';
import { LanguageService } from './template/services/language.service';

@NgModule({
  declarations: [
    TemplateComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PreloaderDirective,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[TranslationService, LanguageService],
  exports: [TemplateComponent, PreloaderDirective, TranslatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CoreModule { }
