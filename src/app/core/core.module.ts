import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './template/components/header/header.component';
import { MainComponent } from './template/components/main/main.component';
import { FooterComponent } from './template/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PreloaderDirective } from './template/directives/preloader.directive';
import { PreloaderService } from './template/services/preloader.service';

@NgModule({
  declarations: [TemplateComponent, HeaderComponent, MainComponent, FooterComponent, PreloaderDirective],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[PreloaderService ],
  exports: [TemplateComponent, PreloaderDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CoreModule { }
