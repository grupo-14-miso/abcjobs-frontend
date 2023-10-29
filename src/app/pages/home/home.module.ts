import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TranslationService } from '../../core/template/services/translation.service';
import { CoreModule } from "../../core/core.module";

@NgModule({
    declarations: [HomeComponent],
    providers: [],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CoreModule
    ]
})
export class HomeModule { }
